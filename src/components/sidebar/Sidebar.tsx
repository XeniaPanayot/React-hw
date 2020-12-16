import React from "react";
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends";

type SidebarPropsType = {
    friends: Array<{ id: string, name: string }>
}
const Sidebar = (props: SidebarPropsType) => {
    return <aside className={styles.sidebarMenu}>
        <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>
                <NavLink to="/home" className={styles.sidebarLink} activeClassName={styles.active}>Home</NavLink>
            </li>
            <li className={styles.sidebarItem}>
                <NavLink to="/posts" className={styles.sidebarLink} activeClassName={styles.active}>Posts</NavLink>
            </li>
            <li className={styles.sidebarItem}>
                <NavLink to="/messages" className={styles.sidebarLink} activeClassName={styles.active}>Messages</NavLink>
            </li>
            <li className={styles.sidebarItem}>
                <NavLink to="/news" className={styles.sidebarLink} activeClassName={styles.active}>News</NavLink>
            </li>
            <li className={styles.sidebarItem}>
                <NavLink to="/blog" className={styles.sidebarLink} activeClassName={styles.active}>Blog</NavLink>
            </li>
            <li className={styles.sidebarItem}>
                <NavLink to="/contacts" className={styles.sidebarLink} activeClassName={styles.active}>Contact me</NavLink>
            </li>
        </ul>

        <Friends friends={props.friends} />

    </aside>
}

export default Sidebar;