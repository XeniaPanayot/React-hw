import React, {ChangeEvent, useState} from 'react';
import styles from './Dialogues.module.css';
import {ActionDialogueTypes, addNewDialogueMessageActionCreator, getNewDialogueMessageActionCreator} from "../../../data/new_dialogue_reducer";
import {ActionTypes} from "../../../data/state";

type DialogueReplyFieldPropsType = {
    newDialogueMessage: string,
    replyMessages: { id: string, text: string }[],
    getEnteredText: (text: string)=>void
    addDialogueMessage: ()=>void

}

type DialogueTextareaPropsType = {
    newDialogueMessage: string,
    getEnteredText: (text: string)=>void
    // dispatch: (action: ActionTypes) => void
}

const DialogueTextarea = (props: DialogueTextareaPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let enteredText = e.currentTarget.value;
        props.getEnteredText(enteredText)
        // props.dispatch({type: 'GET-NEW-DIALOGUE-MESSAGE', text: enteredText});
        e.currentTarget.value = "";
    }

    return <textarea
        value={props.newDialogueMessage}
        onChange ={ onChangeHandler }
        className={styles.textarea}
        name="newDialogueMessage"
        id=""
        cols={30}
        rows={5}/>
}

type DualogueBtnPropsType = {
    addDialogueMessage: ()=>void
    // dispatch: (action: ActionTypes) => void
}
const DualogueBtn = (props: DualogueBtnPropsType) => {
    const onBtnClickHandler = () => {
        props.addDialogueMessage()
    }

    return <button
        onClick={() => {
            onBtnClickHandler()

            // props.dispatch(addNewDialogueMessageActionCreator());
            // props.dispatch(getNewDialogueMessageActionCreator(''));
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
        <DialogueTextarea newDialogueMessage={props.newDialogueMessage} getEnteredText={props.getEnteredText}/>
        <DualogueBtn addDialogueMessage={props.addDialogueMessage}/>
    </div>
}

export default DialogueReplyField;