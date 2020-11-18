import React from 'react';
import styles from './Posts.module.css';
import Post from "./post/Post";

const Posts = (props: any) => {
    return <article className={styles.posts}>
        <h1 className={styles.posts__title}>My posts</h1>
        {/*<textarea className={styles.posts__textarea} name="new_post" id="new_post"></textarea>*/}
        <Textarea cols={122} rows={22} id={`newPost`} name={`newPost`}/>
        <button className={styles.posts__submit}>Submit</button>
        <Post message="Hey, I'm commenting here!" likecount="11"/>
        <Post message="Hey, I have an opinion!" likecount="111"/>
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