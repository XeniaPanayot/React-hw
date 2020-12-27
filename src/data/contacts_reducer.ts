import {v1} from "uuid";

type initialStateType = {
    friends: {id: string, name: string}[]
}
const initialState = {
            friends: [
                {id: v1(), name: "Alla"},
                {id: v1(), name: "Anna"},
                {id: v1(), name: "Arbuz"}
            ],
}

const contactsReducer = (state: initialStateType = initialState, action: any) => {
            return state;
    }

export default contactsReducer;
