import React from 'react';
import styles from '../Messages.module.css';
import {NavLink} from "react-router-dom";

type DialoguesPropsType = {
    dialoguesPage: {
        dialogues: Array<{ id: number, name: string }>,
        dialogueMessages: Array<{ id: number, text: string }>
    }

}
type DialoguesItemPropsType = {
    id: number
    name: string
}

const Dialogues = (props: DialoguesPropsType) => {
    const DialoguesItem = (props: DialoguesItemPropsType) => {
        return <li className={styles.dialoguesItem}>
            <NavLink to={"/dialogues/" + props.id} className={styles.dialoguesLink}>{}</NavLink>
        </li>

    }
    // let dialogues = props.dialoguesPage.dialogues.map( d => <>);

}


export default Dialogues;