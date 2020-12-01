import React from "react";
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

type FriendPropsType = {
    id: number
    name: string
}
const Friend = (props: FriendPropsType) => {

    return <li>
        <div>{props.name}</div>
        <img src="" alt=""/>
    </li>
}

export default Friend;