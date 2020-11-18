import React from "react";
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return <aside className={styles.sidebar}>
        <ul className={styles.sidebar__list}>
            <li className={styles.sidebar__item}>
                <NavLink to="/home" className={styles.sidebar__link} activeClassName={styles.active}>Home</NavLink>
            </li>
            <li className={styles.sidebar__item}>
                <NavLink to="/messages" className={styles.sidebar__link} activeClassName={styles.active}>Messages</NavLink>
            </li>
            <li className={styles.sidebar__item}>
                <NavLink to="/news" className={styles.sidebar__link} activeClassName={styles.active}>News</NavLink>
            </li>
            <li className={styles.sidebar__item}>
                <NavLink to="/blog" className={styles.sidebar__link} activeClassName={styles.active}>Blog</NavLink>
            </li>
            <li className={styles.sidebar__item}>
                <NavLink to="/contacts" className={styles.sidebar__link} activeClassName={styles.active}>Contact me</NavLink>
            </li>
        </ul>
    </aside>
}

export default Sidebar;