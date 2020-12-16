import React from "react";
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

type FriendPropsType = {
    id: string
    name: string
}
const Friend = (props: FriendPropsType) => {

    return <li>
        <NavLink to={""}>
            <div>{props.name}</div>
            <img src="" alt=""/>
        </NavLink>
    </li>
}

export default Friend;