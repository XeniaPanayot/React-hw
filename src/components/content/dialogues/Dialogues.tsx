import React from 'react';
import styles from './Dialogues.module.css';
import DialogueReplyField from "./DialoguesReply";
import App from "../../../App";

type DialogueNameType = {
    id: string
    name: string
}
const DialogueName = (props: DialogueNameType) => {
    return <div>
        <li>
            <p className={styles.name}>{props.name}</p>
        </li>
    </div>
}
type DialoguePropsType = {
    message: string
}
const Dialogue = (props: DialoguePropsType) => {
    return <div className={styles.bubble}>
        <p className={styles.dialogueText}>{props.message}</p>
    </div>
}
// const DialogueReply = () => {
//     return <div className={ `${styles.replyBubble} ${styles.bubble}` } >
//         <p className={styles.dialogueText}>{"New from textarea"}</p>
//     </div>
// }

type DialoguesPropsType = {
    dialogues: Array<{ id: string, name: string }>,
    dialogueMessages: Array<{ id: string, text: string }>,
    newDialogueMessage: string,
    replyMessages: { id: string, text: string }[],
    addNewDialogueMessage: () => void
    getNewDialogueMessage: (text: string) => void
}


const Dialogues = (props: DialoguesPropsType) => {
    let dialogueNameElements = props.dialogues.map(n => <DialogueName id={n.id} name={n.name}/>);
    let dialogueContentElements = props.dialogueMessages.map(d => <Dialogue message={d.text}/>);


    return <div className={styles.container}>
        <div className={styles.names}>
            <ul className={styles.namesList}>
                {dialogueNameElements}
            </ul>
        </div>
        <div className={styles.dialogues}>
            {dialogueContentElements}
            <DialogueReplyField
                newDialogueMessage={props.newDialogueMessage}
                getNewDialogueMessage={props.getNewDialogueMessage}
                replyMessages={props.replyMessages}
                addNewDialogueMessage={props.addNewDialogueMessage}/>
        </div>


    </div>
}

export default Dialogues;