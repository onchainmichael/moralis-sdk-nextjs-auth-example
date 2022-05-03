import React from "react";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import CreateWalletByMail from "../components/CreateWalletByMail/CreateWalletByMail";

const CreateWallet: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <CreateWalletByMail />
            </main>
        </div>
    );
};

export default CreateWallet;
