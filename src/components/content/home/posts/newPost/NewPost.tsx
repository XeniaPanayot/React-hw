import React from 'react';
import styles from '../Posts.module.css';

type NewPostPropsType = {
    cols: number
    rows: number
    name: string
    id: string
    addPost: (postMessage: string) => void
}
const NewPost = (props: NewPostPropsType) => {
    let NewPostContent = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (NewPostContent.current?.value !== undefined) {
            let postContent = NewPostContent.current?.value;
            props.addPost(postContent);
            NewPostContent.current.value = '';
        }
    }
    return <div>
        <textarea ref={NewPostContent}
                  className={styles.posts__textarea}
                  cols={props.cols} rows={props.rows}
                  id={props.id} name={props.name}>
    </textarea>
        <button onClick={ () => {addPost()} }>
            Add post
        </button>
    </div>
}

export default NewPost;