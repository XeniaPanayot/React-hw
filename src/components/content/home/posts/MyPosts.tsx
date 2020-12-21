import React from 'react';
import styles from './Posts.module.css';
import {Post} from "./post/Post";
import NewPost from "./newPost/NewPost";
import {ActionTypes} from "../../../../data/state";

type MyPostsPropsType = {
    postsData: Array< {id: string, avatar: string, alt: string, message: string, likecount: number, btnName: string}>
    dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let MyPostsElement = props.postsData
        .map(p => <Post id={p.id} avatar={p.avatar} alt={p.alt} message={p.message} likecount={p.likecount} />);

    return <article className={styles.posts}>
        <h1 className={styles.posts__title}>My posts</h1>
        <NewPost
            cols={122} rows={22}
            id={`newPost`}
            name={`newPost`}
            dispatch={props.dispatch}
            />
        { MyPostsElement }
    </article>
}

export default MyPosts;