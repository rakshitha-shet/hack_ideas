import { useState } from "react";
import { patchData } from "../../utils/fetchData";
import upVoteIcon from "../../assets/images/upvote.png"
import styles from "./Card.module.css";

const Card = ({idea, updateVote}) => {
    const [updateUpVote, setUpdateUpVote]  = useState(idea.upvote)

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
            <div>
                <p>{idea.description}</p>
            </div>
            <div>
                <span>{idea.title}</span>
                <h3>{`#${idea.tag.join(", #")}`}</h3>
            </div>
            <button className={styles.vote} onClick={handleClick}>
                <img src={upVoteIcon} width="30px" />
            </button> 
            <span>{updateUpVote}</span>
        </div>
    );
}

export default Card;