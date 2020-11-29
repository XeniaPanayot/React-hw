import React from "react";
import styles from './MainContent.module.css';
import MyPosts from "./posts/MyPosts";

type MainContentPropsType = {
    postsData: Array< {id: number, name: string, message: string, likecount: number, btnName: string}>
}
const MainContent = (props: MainContentPropsType) => {
    return  <article>
        <img className={styles.content__theme} src="https://thumbs.dreamstime.com/b/panorama-granada-sunset-spa-panorama-granada-sunset-spain-187576368.jpg" alt="MainContent theme"/>
        <div>
            <img className={styles.content__avatar} src="https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg" alt="avatar"/>
            <div className={styles.content__description}>
                <p>Name</p>
                <p>Hobbies</p>
            </div>
        </div>
        <MyPosts postsData={props.postsData} />
    </article>
}

export default MainContent;