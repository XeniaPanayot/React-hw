import React from "react";
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return <aside className={styles.sidebar}>
        <ul className={styles.sidebar__list}>
            <li className={styles.sidebar__item}>
                <a href="/home" className={styles.sidebar__link}>Home</a>
            </li>
            <li className={styles.sidebar__item}>
                <a href="/messages" className={styles.sidebar__link}>Messages</a>
            </li>
            <li className={styles.sidebar__item}>
                <a href="/news" className={styles.sidebar__link}>News</a>
            </li>
            <li className={styles.sidebar__item}>
                <a href="/blog" className={styles.sidebar__link}>Blog</a>
            </li>
            <li className={styles.sidebar__item}>
                <a href="/contacts" className={styles.sidebar__link}>Contact me</a>
            </li>
        </ul>
    </aside>
}

export default Sidebar;