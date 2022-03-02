import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { createPost } from "../../actions/posts";
import styles from './form.module.scss';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));
    }

    const encodeImageFileAsURL = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            setPostData({...postData, selectedFile: reader.result})
        }
        reader.readAsDataURL(file);
    }

    const clearForm = () => {
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    return (
        <>
            <h2 className={styles.memoryFormHeading}>Creating a Memory</h2>
            <form className={styles.memoryForm} onSubmit={handleSubmit}>
                <input className={styles.inputField} type="text" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} required />
                <input className={styles.inputField} type="text" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} required />
                <input className={styles.inputField} type="text" placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <input className={styles.inputField} type="text" placeholder="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <input placeholder="Choose file" type="file" value={postData.selecteselectedFile} onChange={(e)=> encodeImageFileAsURL(e)} required />
                <input className={styles.memoryFormBtn} type="submit" value="Submit" />
                <input className={`${styles.memoryFormBtn} ${styles.resetBtn} ajit`} type="reset" value="Reset" onClick={clearForm} />
            </form>
        </>
    );
}

export default Form;