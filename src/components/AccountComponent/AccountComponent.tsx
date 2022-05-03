import React from "react";
import { useMoralis } from "react-moralis";
import {
    Flex,
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";

const AccountComponent = () => {
    const {
        authenticate,
        isAuthenticated,
        isAuthenticating,
        user,
        account,
        logout,
        Moralis
    } = useMoralis();

    const logOut = async () => {
        await logout();
        console.log("logged out");
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <Flex align={'center'} w='100%' maxW='450px' justify={'space-between'}>
            <Box>
                <Text>{account}</Text>
            </Box>
            <Button colorScheme={'orange'} variant='outline' onClick={logOut} >
                Logout
            </Button>
        </Flex>
    );
};

export default AccountComponent;
