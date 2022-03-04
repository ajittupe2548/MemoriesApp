import React from 'react';

import styles from './post.module.scss';

const Post = ({ post }) => {
    return (
        <div className={styles.postCard}>
            <div className={styles.creator}>{post.creator}</div>
            <div className={styles.editBtn}>Edit</div>
            <img className={styles.postImg} src={post.selectedFile} alt="Memory" />
            <div className={styles.infoContainer}>
                <div className={styles.tags}>#
                    {post.tags}
                </div>
                <div className={styles.title}>
                    {post.title}
                </div>
                <div className={styles.message}>
                    {post.message}
                </div>
                <div className={styles.btnsContainer}>
                    <div className={styles.likeBtn}>
                        Like
                    </div>
                    <div className={styles.deleteBtn}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
