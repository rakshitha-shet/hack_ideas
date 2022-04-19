import { useState } from 'react'
import IdeaCards from '../IdeaCards/IdeaCards';
import IdeaForm from '../IdeaForm/IdeaForm';
import Topbar from "../Topbar/Topbar";

const Home = () => {
    const [updateCount, setUpdateCount] = useState(0);

    const updateCountValue = () => {
        setUpdateCount((prevCount) => { return ++prevCount });
    }

    return (<>
        <Topbar />
        <IdeaForm updateCountValue={updateCountValue}/>
        <IdeaCards updated={updateCount}/>
    </>);
}

export default Home;