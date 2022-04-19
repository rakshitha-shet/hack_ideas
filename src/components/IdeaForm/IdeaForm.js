
import { useEffect, useState } from 'react'
import { postData } from '../../utils/fetchData';
import styles from "./IdeaForm.module.css";

const IdeaForm = ({updateCountValue}) => {
    const [idea, setIdea] = useState("");
    const [tag, setTag] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        setData({
            title: idea,
            tag: ("tech feature "+tag).split(" "),
            description: description,
            upvote: 0,
            createdAt: new Date()
        });
    }

    useEffect(() => {
        if (!data) return
        postData(data).then(() => {
            clearInputData();
        })
    }, [data])

    const clearInputData = () => {
        setIdea("");
        setTag("");
        setDescription("");
        updateCountValue();
    }

    return(
        <div className={styles.formContainer}>
            <form onSubmit={submitHandler}>
                <div className={styles.formElement}>
                    <label>Idea: </label>
                    <input type="text" name="idea" value={idea} onChange={(e) => setIdea(e.target.value)} required />
                </div>

                <div className={styles.formElement}>
                    <label>Tag: </label>
                    <input type="text" name="tag" value={tag} onChange={(e) => setTag(e.target.value)} required />
                </div>

                <div className={styles.formElement}>
                    <label>Description: </label>
                    <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>

                <button type="submit" className={styles.submit}>Create Idea</button>
            </form>
        </div>
    );
}

export default IdeaForm;
