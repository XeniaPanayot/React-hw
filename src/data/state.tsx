import React, {useState} from 'react';
import {v1} from "uuid";
import {rerenderTree} from "../render";
import App from "../App";

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

const state: StateType = {
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

    dialogues: [
        {id: v1(), name: "Rita"},
        {id: v1(), name: "Roma"},
        {id: v1(), name: "Rimma"}
    ],
    dialogueMessages: [
        {id: v1(), text: "text33"},
        {id: v1(), text: "text44"}
    ],
    newDialogueMessage: "",
    replyMessages: [
        {id: v1(), text: "reply to text33"},
        {id: v1(), text: "reply to  text44"}
    ],
    friends: [
        {id: v1(), name: "Alla"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Arbuz"}
    ],
};

export const getNewDialogueMessage = (text: string) => {
    state.newDialogueMessage = text;
    rerenderTree(state);
}

export const addNewDialogueMessage = () => {
    const newReplyMessage = {
        id: v1(),
        text: state.newDialogueMessage
    }
    state.replyMessages.push(newReplyMessage)
    rerenderTree(state)
}
export const getNewPost = (text: string) => {
    state.newPost = text;
    rerenderTree(state);
}

export const addPost = () => {
    let newPost = {
        id: v1(),
        avatar: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
        alt: "My avatar",
        message: state.newPost,
        likecount: 0,
        btnName: "Likes"
    }
    state.posts.push(newPost);
    console.log(newPost);
    rerenderTree(state)
}

export default state;
