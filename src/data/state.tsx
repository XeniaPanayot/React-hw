import React, {useState} from 'react';
import {v1} from "uuid";
import newPostReducer, {ActionPostTypes} from "./newPost_reducer";
import newDialogueReducer, {ActionDialogueTypes} from "./new_dialogue_reducer";

export type ActionTypes = ActionPostTypes | ActionDialogueTypes;
export type StateType = {
    homePage: {
        myProfile: {
            src: string
            alt: string
            name: string
            hobbies: Array<string>
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
    },
    dialoguesPage: {
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
    },
    sidebarFriends: {
        friends: Array<{
            id: string
            name: string
        }>
    }
}


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => any
}

// export type ActionTypes = GetNewPostActionType | AddPostActionType | getNewDialogueMessage | addNewDialogueMessage;

const store: StoreType = {
    _state: {
        homePage: {
            myProfile: {
                src: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                name: "Valentin",
                hobbies: ["Cooking", "Hiking"]
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
        },
        dialoguesPage: {
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
        },
        sidebarFriends: {
            friends: [
                {id: v1(), name: "Alla"},
                {id: v1(), name: "Anna"},
                {id: v1(), name: "Arbuz"}
            ],
        }
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
        this._state = newDialogueReducer(this._state, action);
        this._state = newPostReducer(this._state, action);

        this._onChange()
    }
}

export default store;
