import React from 'react';
import {ActionPostTypes} from "../../../../../data/newPost_reducer";
import NewPost from "./NewPost";
import {MyPostsPropsType, PostsDataType, } from "../MyPosts";

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

type PropsType = {
    homePage: PostsDataType
    dispatch: (action: ActionPostTypes) => any

}

const NewPostContainer = (props: PropsType) => {
    const addPost = () => {
        props.dispatch(addPostAction());
    }
    const getPost = (postText: string) => {
        props.dispatch(getNewPostAction(postText));
    }
    return (
        <NewPost
            cols={122} rows={22}
            id={`newPost`}
            name={`newPost`}
            addPost={addPost}
            getPost={getPost}
        />
    )

}

export default NewPostContainer;