import React from "react";
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import AccountComponent from "../AccountComponent/AccountComponent";

const Header = () => {
    const router = useRouter();

    const navigateToUserCreate = () => {
        router.push("/");
    };
    const navigateToWalletConnect = () => {
        router.push("/register-wallet");
    };
    const navigateToEmailConnect = () => {
        router.push("/create-wallet");
    };

    return (
        <Flex
            p={8}
            borderWidth={1}
            position={"fixed"}
            borderRadius={8}
            boxShadow="lg"
            width="100%"
            maxW="full"
            justify={"space-between"}
        >
            <Flex maxW={"400px"} justify="space-between">
                <ButtonGroup>
                    {router.pathname === "/" ? (
                        <Button
                            colorScheme={"blue"}
                            variant="outline"
                            isDisabled={true}
                        >
                            Create user
                        </Button>
                    ) : (
                        <Button
                            colorScheme={"blue"}
                            variant="solid"
                            onClick={navigateToUserCreate}
                        >
                            Create user
                        </Button>
                    )}
                    {router.pathname === "/register-wallet" ? (
                        <Button
                            colorScheme={"blue"}
                            variant="outline"
                            isDisabled={true}
                        >
                            Connect with Wallet
                        </Button>
                    ) : (
                        <Button
                            colorScheme={"blue"}
                            variant="solid"
                            onClick={navigateToWalletConnect}
                        >
                            Connect with Wallet
                        </Button>
                    )}

                    {router.pathname === "/create-wallet" ? (
                        <Button
                            colorScheme={"blue"}
                            variant="outline"
                            isDisabled={true}
                        >
                            Connect with Email
                        </Button>
                    ) : (
                        <Button
                            colorScheme={"blue"}
                            variant="solid"
                            onClick={navigateToEmailConnect}
                        >
                            Connect with Email
                        </Button>
                    )}
                </ButtonGroup>
            </Flex>
            <AccountComponent />
        </Flex>
    );
};

export default Header;
