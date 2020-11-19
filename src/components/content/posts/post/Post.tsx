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
    likecount: string
    btnName: string
}
const LikesBtn = (props: LikesBtnPropsType) => {
    return         <div className={styles.LikesNCounts}>
        <button className={styles.LikesBtn}>{props.btnName}</button>
        <PostLikes likecount={props.likecount}/>
    </div>

}
type PostLikesPropsType = {
    likecount: string
}
const PostLikes = (props: PostLikesPropsType) => {
    return <span>{props.likecount}</span>
}
type PostPropsType = {
    message: string
    likecount: string
    btnName: string
}
const Post = (props: PostPropsType) => {
    return <div className={styles.post}>
        <PostAvatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg8RxCu-qCakoz8wPiwwzxpnxZFCpJ2XNWgA&usqp=CAU"
            alt="User's avatar"/>
        <PostText message={props.message}/>
        <LikesBtn likecount={props.likecount} btnName={props.btnName}/>
    </div>
}

export default Post;