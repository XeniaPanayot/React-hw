import React from 'react';
import styles from './Messages.module.css';
import {NavLink} from "react-router-dom";

type DialoguesItemPropsType = {
    id: string
    name: string
}
const DialoguesItem = (props: DialoguesItemPropsType) => {
    return <li className={styles.dialoguesItem}>
        <NavLink to={"/dialogues/" + props.id} className={styles.dialoguesLink}>{props.name}</NavLink>
    </li>
}

type MessagesItemPropsType = {
    text: string
}

const MessagesItem = (props: MessagesItemPropsType) => {
    return <li className={styles.messagesItem}>{props.text}</li>
}

const Messages = () => {
    return <div className={styles.container}>
        <div className={styles.dialogues}>
            <ul className={styles.dialoguesList}>
                <DialoguesItem name="Lena" id="1" />
                <DialoguesItem name="Misha" id="2" />
                <DialoguesItem name="Matvey" id="3" />
            </ul>
        </div>
        <div className={styles.messages}>
            <ul className={styles.messagesList}>
                <MessagesItem text="Hej"/>
                <MessagesItem text="Haj"/>
                <MessagesItem text="Hoj"/>
            </ul>
        </div>
    </div>
}

export default Messages;