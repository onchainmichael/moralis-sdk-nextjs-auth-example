import { Flex, Link, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import LoginUser from "../LoginUser/LoginUser";
import RegisterEmail from "../RegisterUser/RegisterUser";

const AuthComponent: FC = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);

    const registerToggle = () => {
        setIsRegister(!isRegister);
    };
    if (!isRegister) {
        return (
            <Flex direction={"column"}>
                <LoginUser />

                <Text mt={"15px"} align="center">
                    Don&#39;t have an account? You can{" "}
                    <Link color="blue.500" onClick={registerToggle}>
                        register
                    </Link>{" "}
                    it!
                </Text>
            </Flex>
        );
    }
    return (
        <Flex direction={"column"}>
            <RegisterEmail />

            <Text mt={"15px"} align="center">
                Already have an account? Try to{" "}
                <Link color="blue.500" onClick={registerToggle}>
                    sign in!
                </Link>
            </Text>
        </Flex>
    );
};

export default AuthComponent;
