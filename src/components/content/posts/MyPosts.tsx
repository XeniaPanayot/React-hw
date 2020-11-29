import React from 'react';
import styles from './Posts.module.css';
import Post from "./post/Post";
import NewPost from "./newPost/NewPost";

type MyPostsPropsType = {
    postsData: Array< {id: number, name: string, message: string, likecount: number, btnName: string}>
}

const MyPosts = (props: MyPostsPropsType) => {

    let MyPostsElement = props.postsData
        .map(p => <Post id={p.id} message={p.message} likecount={p.likecount}/>);

    return <article className={styles.posts}>
        <h1 className={styles.posts__title}>My posts</h1>
        <NewPost cols={122} rows={22} id={`newPost`} name={`newPost`}/>
        <button className={styles.posts__submit}>Submit</button>
        {MyPostsElement}
    </article>
}

export default MyPosts;