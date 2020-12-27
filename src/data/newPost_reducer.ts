import {v1} from "uuid";

export type ActionPostTypes = AddPostActionType | GetNewPostActionType;
type GetNewPostActionType = {
    type: 'GET-NEW-POST'
    text: string
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type GetNewPostActionCreatorType = (message: string) => {
    type: 'GET-NEW-POST',
    text: string
};

export const GetNewPostActionCreator: GetNewPostActionCreatorType = (message: string) => {
    return {
        type: 'GET-NEW-POST',
        text: message
    }
}
type AddPostActionCreatorType = () => {
    type: 'ADD-POST'
}
type postType = {
    id: string,
    avatar: string,
    alt: string,
    message: string,
    likecount: number,
    btnName: string
}
type initialStateType = {
    myProfile: {
        src: string,
        alt: string,
        name: string,
        hobbies: string[]
    },
    newPost: string,
    posts: postType[],
}

export const AddPostActionCreator: AddPostActionCreatorType = () => {
    return {
        type: 'ADD-POST'
    }
}

// CHANGE ANY
export type newPostReducerType = any;
const GET_NEW_POST = 'GET-NEW-POST';
const ADD_POST = 'ADD-POST'

const initialState = {
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
    }

const newPostReducer: newPostReducerType = (state: initialStateType = initialState, action: ActionPostTypes) => {
    switch (action.type) {
        case GET_NEW_POST:
            state.newPost = action.text;
            return state;

        case ADD_POST:
            let newPost = {
                id: v1(),
                avatar: "https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg",
                alt: "My avatar",
                message: state.newPost,
                likecount: 0,
                btnName: "Likes"
            }
            state.posts.push(newPost);
            return state;

        default:
            return state;
    }
}


export default newPostReducer;
