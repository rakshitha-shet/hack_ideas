import { useState } from "react";
import { patchData } from "../../utils/fetchData";
import upVoteIcon from "../../assets/images/upvote.png"
import styles from "./Card.module.css";

const Card = ({idea, updateVote}) => {
    const [updateUpVote, setUpdateUpVote]  = useState(idea.upvote)
    const ideaTimeStamp = new Date(idea.createdAt).toLocaleDateString('en-us', { hour: 'numeric', minute: 'numeric', year:"numeric", month:"short", day:"numeric"});

    const handleClick = () => {
        const func = async () => {
            let response = await  patchData(idea.id, {"upvote": updateUpVote + 1 })
            
            if (response.ok) {
                let data = await response.json()
                setUpdateUpVote(data.upvote);
                updateVote();
            }
        }
        func();
    }
    return(
        <div className={styles.card}>
            <div className={styles.title}>
                <p>{idea.title}</p>
                <p className={styles.timeStamp}>{ideaTimeStamp}</p>
            </div>
            <div>
                <p>{idea.description}</p>
                <p className={styles.tag}>{`#${idea.tag.join(", #")}`}</p>
            </div>
            <button className={styles.vote} onClick={handleClick}>
                <img src={upVoteIcon} width="30px" />
            </button> 
            <span>Vote : {updateUpVote}</span>
        </div>
    );
}

export default Card;