import React, {useState} from 'react';
import {v1} from "uuid";

export type StateType = {
    homePage: {
        myProfile: {
            src: string
            alt: string
            name: string
            hobbies: Array<string>
        },
    },
    newPost: string,
    posts: Array<{
        id: string
        avatar: string
        alt: string
        message: string
        likecount: number
        btnName: string
    }>
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
    friends: Array<{
        id: string
        name: string
    }>
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}
type GetNewPostActionType = {
    type: 'GET-NEW-POST'
    text: string
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type getNewDialogueMessage = {
    type: 'GET-NEW-DIALOGUE-MESSAGE'
    text: string
}
type addNewDialogueMessage = {
    type: 'ADD-NEW-DIALOGUE-MESSAGE'
}


export type ActionTypes = GetNewPostActionType | AddPostActionType | getNewDialogueMessage | addNewDialogueMessage;
export type getNewDialogueMessageActionCreatorType = (message: string) => {
    type: 'GET-NEW-DIALOGUE-MESSAGE',
    text: string
}
export type addNewDialogueMessageActionCreatorType = () => {
    type: 'ADD-NEW-DIALOGUE-MESSAGE'
}


const store: StoreType = {
    _state: {
        homePage: {
            myProfile: {
                src: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                name: "Valentin",
                hobbies: ["Cooking", "Hiking"]
            },
        },
        newPost: "",
        posts: [
            {
                id: v1(),
                avatar: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                message: "Hey, today I have an opinion about you!",
                likecount: 11,
                btnName: "Likes"
            },
            {
                id: v1(),
                avatar: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                message: "Today I'm talking about them!",
                likecount: 111,
                btnName: "Likes"
            }],
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
        friends: [
            {id: v1(), name: "Alla"},
            {id: v1(), name: "Anna"},
            {id: v1(), name: "Arbuz"}
        ],
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    _onChange() {
        console.log("The state is changed -  это заглушка")
    },

    dispatch(action) {
        if (action.type === 'GET-NEW-POST') {
            this._state.newPost = action.text;
            this._onChange();
        } else if (action.type === 'ADD-POST') {
            let newPost = {
                id: v1(),
                avatar: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                message: this._state.newPost,
                likecount: 0,
                btnName: "Likes"
            }
            this._state.posts.push(newPost);
            console.log(newPost);
            this._onChange()
        } else if (action.type === 'GET-NEW-DIALOGUE-MESSAGE') {
            this._state.newDialogueMessage = action.text;
            this._onChange();
        } else if (action.type === 'ADD-NEW-DIALOGUE-MESSAGE') {
            const newReplyMessage = {
                id: v1(),
                text: this._state.newDialogueMessage
            }
            this._state.replyMessages.push(newReplyMessage)
            this._onChange()
        }
    }
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


export default store;

