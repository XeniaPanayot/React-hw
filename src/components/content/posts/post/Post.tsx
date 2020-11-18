import React from 'react';
import styles from './Post.module.css';

const Post = (props: any) => {
    return         <div className={styles.post}>
        <img className={styles.post__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg8RxCu-qCakoz8wPiwwzxpnxZFCpJ2XNWgA&usqp=CAU" alt="User's avatar"/>
        {props.message}
        <div className={styles.post__likes}>
            <button>Likes</button>
            {props.likecount}
        </div>
    </div>
}

export default Post;