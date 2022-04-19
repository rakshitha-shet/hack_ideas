import { useState, useEffect } from 'react'
import { getData } from '../../utils/fetchData';
import Card from '../Card/Card';

const IdeaCards = ({updated}) => {
    const [data, setData] = useState([]);
    const [updateDataOnVote, setupdateDataOnVote] = useState(0);

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

    return(
        <>
            {data && data.map((idea) => {
                return <Card key={idea.id} idea={idea} updateVote={updateVote} />
            })}
        </>
    );
}

export default IdeaCards;