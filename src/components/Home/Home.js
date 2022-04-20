import { useState } from 'react'
import IdeaCards from '../IdeaCards/IdeaCards';
import IdeaForm from '../IdeaForm/IdeaForm';
import Topbar from "../Topbar/Topbar";
import styles from "./Home.module.css";

const Home = ({setEmpId, empId}) => {
    const [updateCount, setUpdateCount] = useState(0);

    const updateCountValue = () => {
        setUpdateCount((prevCount) => { return ++prevCount });
    }

    return (<>
        <Topbar setEmpId={setEmpId}/>
        <div className={styles.leftWall}>
            <IdeaCards updated={updateCount} />
        </div>
        <div className={styles.rightWall}>
            <IdeaForm updateCountValue={updateCountValue} empId={empId}/>
        </div>
    </>);
}

export default Home;