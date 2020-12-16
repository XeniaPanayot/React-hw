import React, {useState} from 'react';
import styles from './Dialogues.module.css';

type DialogueReplyFieldPropsType = {
    getNewDialogueMessage: (text: string) => void,
    newDialogueMessage: string,
    replyMessages: {id: string, text: string }[],
    addNewDialogueMessage: () => void
}

type DialogueTextareaPropsType = {
    newDialogueMessage: string,
    getNewDialogueMessage: (text: string) => void
}
const DialogueTextarea = (props: DialogueTextareaPropsType) => {
    // let [content, setContent] = useState('Content inside txtarea')
    return <textarea
        value={props.newDialogueMessage}
        onChange={(e) => {

             let enteredText = e.currentTarget.value;
             props.getNewDialogueMessage(enteredText);
             // setContent(props.newDialogueMessage);
             // console.log(content)
            e.currentTarget.value = "";

        }}
        className={styles.textarea}
        name="newDialogueMessage"
        id=""
        cols={30}
        rows={5}/>
}

type DualogueBtnPropsType = {
    addNewDialogueMessage: () => void
    getNewDialogueMessage: (text: string) => void
    // newMessageContent: string
    // addMessage: (newMessageContent: string) => void
}
const DualogueBtn = (props: DualogueBtnPropsType) => {
    return <button
        onClick={() => {
            props.addNewDialogueMessage();
            props.getNewDialogueMessage("")
        }}
        className={styles.sendBtn}>
        Send
    </button>
}

type DialogueReplyPropsType = {
    replyMessages: {id: string, text: string }[],
    newDialogueMessage: string
}

const DialogueReply = (props: DialogueReplyPropsType) => {
    return <div className={`${styles.replyBubble} ${styles.bubble}`}>
        <p className={styles.dialogueText}>{props.replyMessages[props.replyMessages.length - 1].text}</p>
    </div>
}



const DialogueReplyField = (props: DialogueReplyFieldPropsType) => {

    return <div className={styles.replyField}>
        <DialogueReply newDialogueMessage={props.newDialogueMessage} replyMessages={props.replyMessages}/>
        <DialogueTextarea newDialogueMessage={props.newDialogueMessage} getNewDialogueMessage={props.getNewDialogueMessage}/>
        <DualogueBtn addNewDialogueMessage={props.addNewDialogueMessage} getNewDialogueMessage={props.getNewDialogueMessage}/>
    </div>
}

export default DialogueReplyField;