import { useNavigate } from "react-router-dom";
import { RoutesTypes } from "../../Types/Routes";
import styles from "./Topbar.module.css";

const Topbar = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate(RoutesTypes.ROUTES.LOGIN);
    }

    return(<>
        <header className={styles.topBar}>
            <span className={styles.topBarTitle}>HACKTHON</span>
           <button className={styles.signOutBtn} onClick={handleSignOut}>Sign Out</button>
        </header>
    </>);
}

export default Topbar;