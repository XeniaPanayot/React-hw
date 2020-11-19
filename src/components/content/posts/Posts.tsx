import React from 'react';
import styles from './Posts.module.css';
import Post from "./post/Post";

const Posts = (props: any) => {
    return <article className={styles.posts}>
        <h1 className={styles.posts__title}>My posts</h1>
        <Textarea cols={122} rows={22} id={`newPost`} name={`newPost`}/>
        <button className={styles.posts__submit}>Submit</button>
        <Post message="Hey, I have an opinion!" likecount="11" btnName="Likes"/>
        <Post message="Nobody cares!" likecount="111" btnName="Likes"/>
    </article>
}

type TextareaPropsType = {
    cols: number
    rows: number
    name: string
    id: string
}
const Textarea = (props: TextareaPropsType) => {
    return <textarea className={styles.posts__textarea}
                     cols={props.cols} rows={props.rows}
                     id={props.id} name={props.name}>
    </textarea>
}

export default Posts;