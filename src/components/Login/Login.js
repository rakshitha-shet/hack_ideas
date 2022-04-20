import { useNavigate } from "react-router-dom";
import { RoutesTypes } from "../../Types/Routes";
import styles from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();

    const sudmitHandler = (e) => {
        e.preventDefault();
        navigate(RoutesTypes.ROUTES.HOME);
    }

    return (
        <>
            <div className={styles.leftWall}>
                <h1 className={styles.loginHero}>HACKATHON</h1>
            </div>
            <div className={styles.rightWall}>
                <div className={styles.formConatiner}>
                    <h3 className={styles.loginHeading}>Welcome! <br/> Sign in to continue</h3>
                    <form className={styles.loginForm} onSubmit={sudmitHandler}>
                        <input type="number" placeholder="Employee Id" className={styles.empIdInput} max="1000" min="1" step="1" required />
                        <button type="submit" className={styles.loginBtn}>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;