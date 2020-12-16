import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';


export default {
    title: 'uncontrolled input'
}

export const UncontrolledInput = () => {

    // types
    type SkillType = {
        id: number
        content: string
    }

    // data
    const [skills, setSkills] = useState([
        {id: 2, content: "Read minds"},
        {id: 3, content: "Wash floor"},
        {id: 4, content: "Drive trucks"},
    ]);
    let [inputValue, setInputValue] = useState('');

    // functions
    function addSkill(enteredSkill: string) {
     const newSkill: SkillType = { id: 1, content: enteredSkill };
     let newSkillsArray: Array<SkillType> = [newSkill, ...skills];
     setSkills(newSkillsArray);
     setInputValue("")
    }
    return <div>
        <input value={inputValue} onChange={(e) => {
            let actualInputValue = e.currentTarget.value;
            setInputValue(actualInputValue);
        }
        }/>
        <button onClick={ () => { addSkill(inputValue) } }>Add</button>
        <div>Added text: {inputValue}</div>
        <div>
            <ul>
                <li>{ skills[0].content}</li>
                <li>{ skills[1].content}</li>
                <li>{ skills[2].content}</li>
            </ul>
        </div>
    </div>
}


