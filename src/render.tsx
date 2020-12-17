import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from "./data/state";
import state, {addPost, getNewDialogueMessage, addNewDialogueMessage, StateType, getNewPost} from "./data/state"

export let rerenderTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                myProfile={state.homePage.myProfile}
                posts={state.posts}
                getNewPost={getNewPost}
                addPost={addPost}
                dialogues={state.dialogues}
                dialogueMessages={state.dialogueMessages}
                newDialogueMessage={state.newDialogueMessage}
                replyMessages={state.replyMessages}
                addNewDialogueMessage={addNewDialogueMessage}
                getNewDialogueMessage={getNewDialogueMessage}
                friends={state.friends}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
