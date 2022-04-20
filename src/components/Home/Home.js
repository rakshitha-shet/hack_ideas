import { useContext, useState } from 'react'
import IdeaCards from '../IdeaCards/IdeaCards';
import IdeaForm from '../IdeaForm/IdeaForm';
import Topbar from "../Topbar/Topbar";
import styles from "./Home.module.css";
import { EmpIdContext }  from "../../App";

const Home = ({setEmpId}) => {
    const [updateCount, setUpdateCount] = useState(0);
    const empId = useContext(EmpIdContext);

    const updateCountValue = () => {
        setUpdateCount((prevCount) => { return ++prevCount });
    }

    const profileBackground = {background: `linear-gradient(#${((empId).toString(16)).padStart(6,0)}, #${((999-empId).toString(16)).padStart(6,0)})` }

    return (<>
        <Topbar setEmpId={setEmpId}/>
        <div className={styles.leftWall}>
            <IdeaCards updated={updateCount} />
        </div>
        <div className={styles.rightWall}>
            <div className={styles.profile} style={profileBackground}></div>
            <h3 className={styles.profileTitle}> Hi Employee Id: {empId} !</h3>
            <IdeaForm updateCountValue={updateCountValue}/>
        </div>
    </>);
}

export default Home;