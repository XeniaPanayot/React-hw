import React from 'react';
import styles from '../Posts.module.css';
import {getNewPost} from "../../../../../data/state";

type NewPostPropsType = {
    cols: number
    rows: number
    name: string
    id: string
    getNewPost: (text: string) => void
    addPost: () => void
}
const NewPost = (props: NewPostPropsType) => {
    let NewPostContent = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (NewPostContent.current?.value !== undefined) {
            let postContent = NewPostContent.current?.value;
            props.addPost();
            NewPostContent.current.value = '';
        }
    }
    return <div>
        <textarea ref={NewPostContent}
                  className={styles.posts__textarea}
                  cols={props.cols} rows={props.rows}
                  id={props.id} name={props.name}
                  onChange={ (event) => {
                      let enteredText = event.currentTarget.value;
                      props.getNewPost(enteredText)
                      console.log(enteredText)
                  }
                  }
        />
        <button onClick={ () => {addPost()} }>
            Add post
        </button>
    </div>
}

export default NewPost;