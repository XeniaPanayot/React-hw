import React from 'react';
import styles from '../Messages.module.css';
import {NavLink} from "react-router-dom";

type DialoguesItemPropsType = {
    id: number
    name: string
}
const DialoguesItem = (props: DialoguesItemPropsType) => {
    let names = [{id: 1, name: "Lena"}, {id: 2, name: "Misha"}, {id: 3, name: "Matvej"}];
    let namesElement = names
        .map(n => <DialoguesItem id={n.id} name={n.name} />);

    return <li className={styles.dialoguesItem}>
        <NavLink to={"/dialogues/" + props.id} className={styles.dialoguesLink}>{namesElement}</NavLink>
    </li>
}


export default DialoguesItem;