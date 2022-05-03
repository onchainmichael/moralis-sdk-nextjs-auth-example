import {
    Button,
    Box,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useMoralis } from "react-moralis";

const CreateWalletByMail: FC = () => {
    const {
        authenticate,
        isAuthenticated,
        isAuthenticating,
        user,
        account,
        logout,
        Moralis,
    } = useMoralis();

    const [email, setEmail] = useState<string>("");
    const loginWeb3Auth = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = await authenticate({
            provider: "web3Auth",
            clientId: process.env.WEB_3_AUTH__CLIENT_ID,
        });
    };
    const loginMagic = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = await authenticate({
            provider: "magicLink",
            email: email,
            apiKey: process.env.MAGIC_API_KEY,
            network: "rinkeby",
        });
    };

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value.trim();
        if (email) {
            setEmail(email);
        } else {
            setEmail("");
        }
    };
    return (
        <Flex direction={"column"}>
            <Box
                p={8}
                width="100%"
                maxWidth="500px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
            >
                <Box textAlign="center">
                    <Heading>Login with Web3Auth</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={loginWeb3Auth}>
                        <Button
                            width="full"
                            mt={10}
                            type="submit"
                            isDisabled={isAuthenticated}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
            <Box
                p={8}
                width="100%"
                maxWidth="500px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                mt={20}
            >
                <Box textAlign="center">
                    <Heading>Login with Magic</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={loginMagic}>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                placeholder="test@test.com"
                                value={email}
                                onChange={onEmailChange}
                            />
                        </FormControl>
                        <Button
                            width="full"
                            mt={10}
                            type="submit"
                            isDisabled={isAuthenticated}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
};

export default CreateWalletByMail;
