import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Sidebar.module.css';
import Friend from "./Friend";

type FriendsPropsType = {
    friends: Array<{ id: number, name: string }>
}
const Friends = (props: FriendsPropsType) => {

   let friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name}/>);
    return <div>
        <h2>Friends</h2>
        <ul className={styles.friendsList}>
            { friendsElements }
        </ul>
    </div>
}

export default Friends;