import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import AuthComponent from "../components/AuthComponent/AuthComponent";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <AuthComponent />
            </main>
        </div>
    );
};

export default Home;
