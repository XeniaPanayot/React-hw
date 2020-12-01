import React from 'react';
import styles from './Post.module.css';

type PostAvatarPropsType = {
    src: string
    alt: string
}
const PostAvatar = (props: PostAvatarPropsType) => {
    return <img className={styles.post__avatar} src={props.src} alt={props.alt}/>
}
type PostTextPropsType = {
    message: string
}
const PostText = (props: PostTextPropsType) => {
    return <div>
        <p className={styles.post__text}>{props.message}</p>
    </div>
}
type LikesBtnPropsType = {
    likecount: number
}
const LikesBtn = (props: LikesBtnPropsType) => {
    return <div className={styles.likesNcounts}>
        <button className={styles.likesBtn}></button>
        <PostLikes likecount={props.likecount}/>
    </div>
}
type PostLikesPropsType = {
    likecount: number
}
const PostLikes = (props: PostLikesPropsType) => {
    return <span>{props.likecount}</span>
}

type PostPropsType = {
    id: number
    avatar: string
    alt: string
    likecount: number
    message: string
}

const Post = (props: PostPropsType) => {
    return <div className={styles.post}>
        <img className={styles.postAvatar} src={props.avatar} alt={props.alt}/>
        <PostText message={props.message}/>
        <LikesBtn likecount={props.likecount}/>
    </div>
}

export default Post;