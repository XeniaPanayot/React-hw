import React, {ChangeEvent} from 'react';
import styles from './Dialogues.module.css';
import DialogueReplyField from "./DialoguesReply";
import {
    ActionDialogueTypes,
    addNewDialogueMessageActionCreator,
    getNewDialogueMessageActionCreator
} from "../../../data/new_dialogue_reducer";
import {ActionTypes} from "../../../data/state";
import Dialogues from "./Dialogues";

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

type DialoguesPropsType = {
    dialogues: Array<{ id: string, name: string }>,
    dialogueMessages: Array<{ id: string, text: string }>,
    newDialogueMessage: string,
    replyMessages: { id: string, text: string }[],
    dispatch: (action: ActionTypes) => void
}


const DialoguesContainer = (props: DialoguesPropsType) => {

    const onChangeHandler = (enteredText: string) => {
        props.dispatch({type: 'GET-NEW-DIALOGUE-MESSAGE', text: enteredText});
    }

    const onBtnClick = () => {
        props.dispatch(addNewDialogueMessageActionCreator());
        props.dispatch(getNewDialogueMessageActionCreator(''));
    }


    return <Dialogues
        dialogues={props.dialogues}
        dialogueMessages={props.dialogueMessages}
        newDialogueMessage={props.newDialogueMessage}
        replyMessages={props.replyMessages}
        getEnteredText={onChangeHandler}
        addDialogueMessage={ onBtnClick }

    />
}

export default DialoguesContainer;