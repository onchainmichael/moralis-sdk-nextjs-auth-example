import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

const RegisterUser = () => {
    const { Moralis } = useMoralis();

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const [validatePassword, setValidatePassword] = useState<boolean>(true);

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value.trim();
        if (email) {
            setEmail(email);
        } else {
            setEmail("");
        }
    };

    const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value.trim();
        if (name) {
            setUsername(name);
        } else {
            setUsername("");
        }
    };

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const pass = event.target.value.trim();
        if (pass) {
            setPassword(pass);

            if (!validatePassword) {
                setValidatePassword(true);
            }
        } else {
            setPassword("");
        }
    };

    const onPasswordConfirmChange = (event: ChangeEvent<HTMLInputElement>) => {
        const pass = event.target.value.trim();
        if (pass) {
            setPasswordConfirm(pass);

            if (!validatePassword) {
                setValidatePassword(true);
            }
        } else {
            setPasswordConfirm("");
        }
    };

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            setValidatePassword(false);
            return;
        }

        const user = new Moralis.User();

        user.set("username", username);
        user.set("password", password);
        user.set("email", email);

        user.signUp()
            .then(() => {
                Moralis.User.logIn(username, password);
            })
            .then((data) => {
                console.log(data);
            })
            .catch(console.error);
    };

    return (
        <Box
            p={8}
            width="100%"
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
        >
            <Box textAlign="center">
                <Heading>Register new User</Heading>
            </Box>
            <Box my={4} textAlign="left">
                <form onSubmit={onFormSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="test@test.com"
                            value={email}
                            onChange={onEmailChange}
                        />
                    </FormControl>
                    <FormControl mt={6} isRequired>
                        <FormLabel>User name</FormLabel>
                        <Input
                            type="username"
                            placeholder="testUser"
                            value={username}
                            onChange={onUsernameChange}
                        />
                    </FormControl>
                    <FormControl
                        mt={6}
                        isRequired
                        isInvalid={!validatePassword}
                    >
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="*******"
                            value={password}
                            onChange={onPasswordChange}
                        />
                        {validatePassword ? null : (
                            <FormErrorMessage>
                                Passwords must be equal!
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        mt={6}
                        isRequired
                        isInvalid={!validatePassword}
                    >
                        <FormLabel>Confirm password</FormLabel>
                        <Input
                            type="password"
                            placeholder="*******"
                            value={passwordConfirm}
                            onChange={onPasswordConfirmChange}
                        />
                        {validatePassword ? null : (
                            <FormErrorMessage>
                                Passwords must be equal!
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <Button width="full" mt={4} type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default RegisterUser;
