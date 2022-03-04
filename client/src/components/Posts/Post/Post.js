import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import styles from './post.module.scss';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.postCard}>
            <div className={styles.creator}>{post.creator}
                <p className={styles.createdAt}>{moment(post.createdAt).fromNow()}</p>
            </div>
            <div className={styles.editBtn} onClick={() => {setCurrentId(post._id)}}>Edit</div>
            <img className={styles.postImg} src={post.selectedFile} alt="Memory" />
            <div className={styles.infoContainer}>
                <div className={styles.tags}>
                    {post.tags.map(tag => `#${tag} `)}
                </div>
                <div className={styles.title}>
                    {post.title}
                </div>
                <div className={styles.message}>
                    {post.message}
                </div>
                <div className={styles.btnsContainer}>
                    <div className={styles.likeBtn} onClick={() => {dispatch(likePost(post._id))}}>
                        Likes {post.likeCount}
                    </div>
                    <div className={styles.deleteBtn} onClick={() => {dispatch(deletePost(post._id))}}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
