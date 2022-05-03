import React from "react";
import { Button, ButtonGroup, Box, Flex, Heading } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

const ConnectWallet = () => {
    const {
        authenticate,
        isAuthenticated,
        isAuthenticating,
        user,
        account,
        logout,
    } = useMoralis();

    const login = async () => {
        if (!isAuthenticated) {
            await authenticate({ signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user!.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    const loginWalletConnect = async () => {
        if (!isAuthenticated) {
            await authenticate({
                provider: "walletconnect",
                signingMessage: "Log in using Moralis",
            })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user!.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box
                p={8}
                maxWidth="1000px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
            >
                <Box textAlign="center">
                    <Heading>Connect with Crypto Wallet</Heading>
                </Box>
                <Flex my={4} direction='column' mt={50}>
                    <ButtonGroup
                        colorScheme={"blue"}
                        variant="solid"
                        isDisabled={isAuthenticated}
                    >
                        <Button w={"100%"} onClick={login}>
                            Moralis Metamask Login
                        </Button>
                        <Button w={"100%"} onClick={loginWalletConnect}>
                            Moralis WalletConnect Login
                        </Button>
                    </ButtonGroup>
                </Flex>
            </Box>
        </Flex>
    );
};

export default ConnectWallet;
