import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {v1} from "uuid";


export default {
    title: 'Checkboxes: change isDone status'
}

export const CheckingCheckboxes = () => {

    // data
    const [tasks, setTasks] = useState([
        {id: v1(), task: "Have a coffee", isDone: true},
        {id: v1(), task: "Do something relevant", isDone: false},
        {id: v1(), task: "Do some nonsense", isDone: true},
        {id: v1(), task: "Code a SuperApp", isDone: true}
    ])


    // functions
    function changeIsDoneStatus(id: string, isDone: boolean) {
        let task = tasks.find(t => t.id === id);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])
    }

    const doneTasks = () => {
        let filteredDone = tasks.filter(t => t.isDone);
        return filteredDone
    }

    // const getTaskElement = () => {
    //     tasks.map(t => {
    //         return <li>
    //             <input type="checkbox" checked={t.isDone} onChange={(e) => {
    //                 let actualIsDone = e.currentTarget.checked;
    //                 changeIsDoneStatus(t.id, actualIsDone);
    //             }}/>
    //             <span></span>
    //         </li>
    //     });
    // }
    //


    return <div>
        <h3>To do today</h3>
        <ul>
            {tasks.map(t => {
                return <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} onChange={(e) => {
                        let actualIsDone = e.currentTarget.checked;
                        changeIsDoneStatus(t.id, actualIsDone);
                    }}/>
                    <span>{t.task}</span>
                </li>
            })}
        </ul>
        <ul>{tasks.filter(t => t.isDone)
            .map(t => {
                return <li>{t.task}</li>
            })
        }</ul>
    </div>
}


