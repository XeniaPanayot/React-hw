import React from 'react';
import styles from '../Posts.module.css';
import {ActionTypes} from "../../../../../data/state";

type NewPostPropsType = {
    cols: number
    rows: number
    name: string
    id: string
    dispatch: (action: ActionTypes) => void
}
export type getNewPostActionType = (postText: string) => {
    type: 'GET-NEW-POST',
    text: string
}
export const getNewPostAction: getNewPostActionType = (postText: string) => {
    return {
        type: 'GET-NEW-POST',
        text: postText
    }
}
export type addPostActionType = () => {
    type: 'ADD-POST',
}
export const addPostAction: addPostActionType = () => {
    return {
        type: 'ADD-POST'
    }
}

const NewPost = (props: NewPostPropsType) => {
    let NewPostContent = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (NewPostContent.current?.value !== undefined) {
            let postContent = NewPostContent.current?.value;
            props.dispatch(addPostAction());
            NewPostContent.current.value = '';
        }
    }
    return <div>
        <textarea ref={NewPostContent}
                  className={styles.posts__textarea}
                  cols={props.cols} rows={props.rows}
                  id={props.id} name={props.name}
                  onChange={(event) => {
                      let enteredText = event.currentTarget.value;
                      props.dispatch(getNewPostAction(enteredText))
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