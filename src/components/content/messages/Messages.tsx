import React from 'react';
import styles from './Messages.module.css';

type MessagesItemPropsType = {
    id: number
    text: string
}

// const MessagesItem = (props: MessagesItemPropsType) => {
//     return <li className={styles.messagesItem}>{props.text}</li>
// }

type MessagesPropsType = {
    dialoguesPage: {
        dialogues: Array<{ id: number, name: string }>,
        dialogueMessages: Array<{ id: number, text: string }>
    }
}
const Messages = (props: MessagesPropsType) => {
    const MessagesItem = (props: MessagesItemPropsType) => {
        return <li className={styles.messagesItem}>{props.text}</li>
    }

    let messagesElements = props.dialoguesPage.dialogueMessages.map(m => <MessagesItem id ={m.id} text={m.text}/>);

    return  <ul className={styles.messagesList}>
                { messagesElements }
            </ul>
}

export default Messages;