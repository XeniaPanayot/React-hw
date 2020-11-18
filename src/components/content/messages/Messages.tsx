import React from 'react';
import styles from './Messages.module.css';

const Messages = () => {
    return <div className={styles.container}>
        <div className={styles.dialogues}>
            {/*<h1>My messages</h1>*/}
            <ul className={styles.dialoguesList}>
                <li className={styles.dialoguesItem + ' ' + styles.active}>Lena</li>
                <li className={styles.dialoguesItem}>Matvej</li>
                <li className={styles.dialoguesItem}>Misha</li>
                <li className={styles.dialoguesItem}>Lida</li>
                <li className={styles.dialoguesItem}>Sveta</li>
                <li className={styles.dialoguesItem}>Julie</li>
                <li className={styles.dialoguesItem}>Masha</li>
            </ul>
        </div>
        <div className={styles.messages}>
            <ul className={styles.messagesList}>
                <li className={styles.messagesItem}>Hej</li>
                <li className={styles.messagesItem}>Hoj</li>
                <li className={styles.messagesItem}>Haj</li>
            </ul>
        </div>
    </div>
}

export default Messages;