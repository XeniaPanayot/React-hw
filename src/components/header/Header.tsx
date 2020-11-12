import React from "react";
import styles from './Header.module.css';


const Header = () => {
    return <header className={styles.header}>
        <img className={styles.header__logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUsnp6ojmcxARD_8XiIG2m-X-aX_KUSac0Rw&usqp=CAU" alt="logo"/>
    </header>
}

export default Header;