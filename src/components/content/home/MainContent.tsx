import React from "react";
import styles from './MainContent.module.css';
import MyProfile from "./myProfile/MyProfile";
import MyPosts from "./posts/MyPosts";


type MainContentPropsType = {
    myProfile: {
        src: string
        alt: string
        name: string,
        hobbies: Array<string>
    }
}

const MainContent = (props: MainContentPropsType) => {
    return  <article>
        <img className={styles.content__theme} src="https://thumbs.dreamstime.com/b/panorama-granada-sunset-spa-panorama-granada-sunset-spain-187576368.jpg" alt="MainContent theme"/>
       <MyProfile myProfile={props.myProfile}/>
    </article>
}

export default MainContent;