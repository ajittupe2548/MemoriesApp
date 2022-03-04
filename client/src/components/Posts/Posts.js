import React from "react";
import { useSelector } from 'react-redux';

import Post from "./Post/Post";

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    return (
        posts && posts.map((post) => (<Post key={post._id} post={post} />))
    );
}

export default Posts;
