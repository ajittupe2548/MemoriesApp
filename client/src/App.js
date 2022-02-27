import React from "react";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './styles.css';
import styles from './app.module.scss';

function App() {
    return (
        <div className="container">
            <h1 className={styles.heading}>Memories</h1>
            <div className={styles.wrapper}>
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