import React from 'react';
import styles from '../Posts.module.css';
import {ActionPostTypes} from "../../../../../data/newPost_reducer";

type NewPostPropsType = {
    cols: number
    rows: number
    name: string
    id: string
    addPost: ()=> void
    getPost: (eneterdText: string)=>void
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
                  placeholder={"Enter new post here"}
                  onChange={(event) => {
                      let enteredText = event.currentTarget.value;
                      props.getPost(enteredText)
                  }
                  }
        />
        <button onClick={() => {
            addPost()
        }}>
            Add post
        </button>
    </div>
}

export default NewPost;