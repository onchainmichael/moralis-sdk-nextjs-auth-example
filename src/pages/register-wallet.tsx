import React from "react";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import ConnectWallet from "../components/ConnectWallet/ConnectWallet";

const RegisterWallet: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <ConnectWallet />
            </main>
        </div>
    );
};

export default RegisterWallet;
