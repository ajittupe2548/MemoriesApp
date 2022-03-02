import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './styles.css';
import styles from './app.module.scss';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <div className="container">
            <h1 className={styles.heading}>Memories</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.postsWrapper}>
                    <Posts/>
                </div>
                <div className={styles.formWrapper}>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default App;