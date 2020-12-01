import React from 'react';
import styles from '../Posts.module.css';

type NewPostPropsType = {
    cols: number
    rows: number
    name: string
    id: string
}
const NewPost = (props: NewPostPropsType) => {
    return <textarea className={styles.posts__textarea}
                     cols={props.cols} rows={props.rows}
                     id={props.id} name={props.name}>
    </textarea>
}

export default NewPost;