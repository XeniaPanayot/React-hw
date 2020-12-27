import React from 'react';
import styles from './Posts.module.css';
import {Post} from "./post/Post";
import NewPost from "./newPost/NewPost";
import {ActionPostTypes} from "../../../../data/newPost_reducer";
import NewPostContainer from "./newPost/NewPostContainer";

// TYPES
type MyProfileType = {
    src: string
    alt: string
    name: string
    hobbies: Array<string>
}
type PostsType = Array<{
    id: string
    avatar: string
    alt: string
    message: string
    likecount: number
    btnName: string
}>
export type PostsDataType = {
    myProfile: MyProfileType,
    newPost: string,
    posts: PostsType
}

export type MyPostsPropsType = {

    postsData: PostsDataType,
    dispatch: (action: ActionPostTypes) => any
}

const MyPosts = (props: MyPostsPropsType) => {
    let MyPostsElement = props.postsData.posts
        .map(p => <Post id={p.id}
                        avatar={p.avatar}
                        alt={p.alt}
                        message={p.message}
                        likecount={p.likecount}
        />);

    return <article className={styles.posts}>
        <h1 className={styles.posts__title}>My posts</h1>
        <NewPostContainer homePage ={props.postsData} dispatch={props.dispatch} />
        { MyPostsElement }
    </article>
}

export default MyPosts;