import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addNewDialogueMessage, getNewDialogueMessage, getNewPost} from "./data/state";
import {addPost} from "./data/state"
import Dialogues from "./components/content/dialogues/Dialogues";

ReactDOM.render(
    <React.StrictMode>
        <App
            myProfile={state.homePage.myProfile}
            posts={state.posts}
            dialogues={state.dialogues}
            dialogueMessages={state.dialogueMessages}
            newDialogueMessage={state.newDialogueMessage}
            replyMessages = {state.replyMessages}
            addNewDialogueMessage={addNewDialogueMessage}
            getNewDialogueMessage={getNewDialogueMessage}
            getNewPost={getNewPost}
            addPost={addPost}
            friends={state.friends}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
