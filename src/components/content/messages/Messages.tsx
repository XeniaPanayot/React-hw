import React from 'react';
import styles from './Messages.module.css';

type MessagesItemPropsType = {
    id: number
    text: string
}

const MessagesItem = (props: MessagesItemPropsType) => {
    return <li className={styles.messagesItem}>{props.text}</li>
}


const Messages = () => {
    let messages = [{id: 1, text: "Hej"}, {id: 2, text: "Haj"}, {id: 3, text: "H0j"}];
    let messagesElement = messages.map(m => <MessagesItem id ={m.id} text={m.text}/>);
    return  <ul className={styles.messagesList}>
                { messagesElement }
            </ul>
}

export default Messages;