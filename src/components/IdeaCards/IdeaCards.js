import { useState, useEffect } from 'react'
import { getData } from '../../utils/fetchData';
import Card from '../Card/Card';
import styles from "./IdeaCards.module.css";

const IdeaCards = ({updated}) => {
    const [data, setData] = useState([]);
    const [updateDataOnVote, setupdateDataOnVote] = useState(0);
    const TIMESTAMP_CREATED = "TIMESTAMP_CREATED";
    const UPVOTE_COUNT = "UPVOTE_COUNT";

    useEffect(() => {
        const func = async () => {
            let response = await getData();
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            let data = await response.json()

            const ideas = [];
            for (let item in data) {
                ideas.push({ id: item, ...data[item] })
            }
            setData(ideas);
        }
        func();
    }, [updated, updateDataOnVote])

    const updateVote = () => {
        setupdateDataOnVote((prevValue) => {return ++prevValue})
    }

    const sortHandler = (e) => {
        if (e.target.value === TIMESTAMP_CREATED) {
            setData((prevData) => {return [].concat(prevData.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt))))})
        } else if (e.target.value === UPVOTE_COUNT) {
            setData((prevData) => {return [].concat(prevData.sort((a, b) => (b.upvote - a.upvote)))})
        }
    }

    return(
        <>
            <div className={styles.sortContainer}>
                <label className={styles.sortLabel}>Sort By: </label>
                <select size="1" name="sort" className={styles.dropdown} onChange={sortHandler}>
                    <option value={TIMESTAMP_CREATED}>Idea Created</option>
                    <option value={UPVOTE_COUNT}>No of Votes</option>
                </select>
            </div>
            {data && data.map((idea) => {
                return <Card key={idea.id} idea={idea} updateVote={updateVote} />
            })}
        </>
    );
}

export default IdeaCards;