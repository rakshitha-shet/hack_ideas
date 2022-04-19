import { useState } from 'react'
import IdeaCards from '../IdeaCards/IdeaCards';
import IdeaForm from '../IdeaForm/IdeaForm';
import Topbar from "../Topbar/Topbar";
import styles from "./Home.module.css";

const Home = () => {
    const [updateCount, setUpdateCount] = useState(0);

    const updateCountValue = () => {
        setUpdateCount((prevCount) => { return ++prevCount });
    }

    return (<>
        <Topbar />
        <div className={styles.rightWall}>
            <IdeaForm updateCountValue={updateCountValue} />
        </div>
        <div className={styles.leftWall}>
            <IdeaCards updated={updateCount} />
        </div>
    </>);
}

export default Home;