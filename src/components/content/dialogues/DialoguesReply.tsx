import React, {useState} from 'react';
import styles from './Dialogues.module.css';
import {ActionTypes} from "../../../data/state";

type DialogueReplyFieldPropsType = {
    newDialogueMessage: string,
    replyMessages: { id: string, text: string }[],
    dispatch: (action: ActionTypes) => void
}

type DialogueTextareaPropsType = {
    newDialogueMessage: string,
    dispatch: (action: ActionTypes) => void
q}
const DialogueTextarea = (props: DialogueTextareaPropsType) => {
    return <textarea
        value={props.newDialogueMessage}
        onChange={(e) => {

            let enteredText = e.currentTarget.value;
            props.dispatch({type: 'GET-NEW-DIALOGUE-MESSAGE', text: enteredText});
            e.currentTarget.value = "";

        }}
        className={styles.textarea}
        name="newDialogueMessage"
        id=""
        cols={30}
        rows={5}/>
}

type DualogueBtnPropsType = {
    dispatch: (action: ActionTypes) => void
}
const DualogueBtn = (props: DualogueBtnPropsType) => {
    return <button
        onClick={() => {
            props.dispatch({type: 'ADD-NEW-DIALOGUE-MESSAGE'});
            props.dispatch({type: 'GET-NEW-DIALOGUE-MESSAGE', text: ""});
        }}
        className={styles.sendBtn}>
        Send
    </button>
}

type DialogueReplyPropsType = {
    replyMessages: { id: string, text: string }[],
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
        <DialogueTextarea newDialogueMessage={props.newDialogueMessage} dispatch={props.dispatch}/>
        <DualogueBtn dispatch={props.dispatch}/>
    </div>
}

export default DialogueReplyField;