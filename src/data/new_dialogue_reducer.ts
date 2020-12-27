import {v1} from "uuid";

export type ActionDialogueTypes = getNewDialogueMessage | addNewDialogueMessage;
type getNewDialogueMessage = {
    type: 'GET-NEW-DIALOGUE-MESSAGE'
    text: string
}
type addNewDialogueMessage = {
    type: 'ADD-NEW-DIALOGUE-MESSAGE'
}

export type getNewDialogueMessageActionCreatorType = (message: string) => {
    type: 'GET-NEW-DIALOGUE-MESSAGE',
    text: string
}
export type addNewDialogueMessageActionCreatorType = () => {
    type: 'ADD-NEW-DIALOGUE-MESSAGE'
}

export const getNewDialogueMessageActionCreator: getNewDialogueMessageActionCreatorType = (message: string) => {
    return {
        type: 'GET-NEW-DIALOGUE-MESSAGE',
        text: message
    }
}
export const addNewDialogueMessageActionCreator: addNewDialogueMessageActionCreatorType = () => {
    return {
        type: 'ADD-NEW-DIALOGUE-MESSAGE'
    }
}
// CHANGE ANY
export type newDialogueReducerType = any;
export type initialStateType = {
    dialogues: Array<{
        id: string
        name: string
    }>,
    dialogueMessages: Array<{
        id: string
        text: string
    }>,
    newDialogueMessage: string,
    replyMessages: Array<{ id: string, text: string }>,
}
let initialState = {
    newDialogueMessage: "",
    dialogues: [
        {id: v1(), name: "Rita"},
        {id: v1(), name: "Roma"},
        {id: v1(), name: "Rimma"}
    ],
    dialogueMessages: [
        {id: v1(), text: "text33"},
        {id: v1(), text: "text44"}
    ],
    replyMessages: [
        {id: v1(), text: "reply to text33"},
        {id: v1(), text: "reply to  text44"}
    ],
}
const GET_NEW_DIALOGUE_MESSAGE = 'GET-NEW-DIALOGUE-MESSAGE';
const ADD_NEW_DIALOGUE_MESSAGE = 'ADD-NEW-DIALOGUE-MESSAGE';

const newDialogueReducer: newDialogueReducerType = (state: initialStateType = initialState, action: ActionDialogueTypes) => {
    switch (action.type) {
        case GET_NEW_DIALOGUE_MESSAGE:
            state.newDialogueMessage = action.text;
            return state;
        case ADD_NEW_DIALOGUE_MESSAGE:
            const newReplyMessage = {
                        id: v1(),
                        text: state.newDialogueMessage
                    }
                    state.replyMessages.push(newReplyMessage)
                return state;
        default:
            return state;
    }
}

export default newDialogueReducer;