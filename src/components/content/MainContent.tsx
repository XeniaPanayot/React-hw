import React from "react";
import styles from './MainContent.module.css';
import Posts from "./posts/Posts";

const MainContent = () => {
    return  <article>
        <img className={styles.content__theme} src="https://thumbs.dreamstime.com/b/panorama-granada-sunset-spa-panorama-granada-sunset-spain-187576368.jpg" alt="MainContent theme"/>
        <div>
            <img className={styles.content__avatar} src="https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg" alt="avatar"/>
            <div className={styles.content__description}>
                <p>Name</p>
                <p>Hobbies</p>
            </div>
        </div>
        <Posts cols={50} rows={50} id={`newPost`} name={`newPost`}/>
    </article>
}

export default MainContent;