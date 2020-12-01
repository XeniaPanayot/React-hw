import React from 'react';

let state = {
    homePage: {
        myProfile: {
            src: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
            alt: "My avatar",
            name: "Valentin",
            hobbies: ["Cooking", "Hiking"]
        },
        posts: [
            {
                id: 1,
                avatar: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                message: "Hey, today I have an opinion about you!",
                likecount: 11,
                btnName: "Likes"
            },
            {
                id: 2,
                avatar: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                message: "Today I'm talking about them!",
                likecount: 111,
                btnName: "Likes"
            }]
    },
    dialoguesPage: {
        dialogues: [{id: 1, name: "Rita"}, {id: 2, name: "Roma"}, {id: 3, name: "Rimma"}],
        dialogueMessages: [{id: 1, text: "text33"}, {id: 2, text: "text44"}]
    },
    friends: [{id: 1, name: "Alla"}, {id: 2, name: "Anna"}, {id: 3, name: "Arbuz"}],
};

export default state;
