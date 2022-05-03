import React, { ChangeEvent, FormEvent, useState } from "react";
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis/types";

const LoginUser = () => {
    const {Moralis} = useMoralis()
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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
        } else {
            setPassword("");
        }
    };

    const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await Moralis.User.logIn(username, password)

            console.log(user)
        } catch (error) {
            console.error(error)
        }
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
                <Heading>Login with UserName</Heading>
            </Box>
            <Box my={4} textAlign="left">
                <form onSubmit={onFormSubmit}>
                    <FormControl isRequired>
                        <FormLabel>UserName</FormLabel>
                        <Input
                            type="username"
                            placeholder="testUser"
                            value={username}
                            onChange={onUsernameChange}
                        />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="*******"
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </FormControl>
                    <Button width="full" mt={4} type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default LoginUser;
