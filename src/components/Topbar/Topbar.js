import styles from "./Topbar.module.css";

const Topbar = ({setEmpId}) => {

    const handleSignOut = () => {
        setEmpId("");
    }

    return(<>
        <header className={styles.topBar}>
            <span className={styles.topBarTitle}>HACKATHON</span>
           <button className={styles.signOutBtn} onClick={handleSignOut}>Sign Out</button>
        </header>
    </>);
}

export default Topbar;