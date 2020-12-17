import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import MainContent from "./components/content/home/MainContent";
import {BrowserRouter, Route} from 'react-router-dom';
import Blog from "./components/content/blog/Blog";
import News from "./components/content/news/News";
import Contacts from "./components/content/contacts/Contacts";
import Dialogues from "./components/content/dialogues/Dialogues";
import MyPosts from "./components/content/home/posts/MyPosts";
import state, {addNewDialogueMessage, getNewPost} from "./data/state";


type AppPropsType = {
    myProfile: {
        src: string
        alt: string
        name: string,
        hobbies: Array<string>
    }
    posts: Array<{ id: string, avatar: string, alt: string, message: string, likecount: number, btnName: string }>
    dialogues: Array<{ id: string, name: string }>
    dialogueMessages: Array<{ id: string, text: string }>
    newDialogueMessage: string,
    replyMessages: { id: string, text: string }[],
    getNewDialogueMessage: (text: string) => void
    addNewDialogueMessage: () => void
    friends: Array<{ id: string, name: string }>
    getNewPost: (text: string) => void
    addPost: () => void
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Sidebar friends={props.friends}
                />
                <div className='container-bg'>
                    <Route path='/home' render={() => <MainContent
                        myProfile={props.myProfile}/>}/>
                    <Route path='/posts' render={() => <MyPosts
                        postsData={props.posts}
                        getNewPost={props.getNewPost}
                        addPost={props.addPost}/>}/>
                    <Route path='/messages' render={() => <Dialogues dialogues={props.dialogues}
                                                                     dialogueMessages={props.dialogueMessages}
                                                                     newDialogueMessage={props.newDialogueMessage}
                                                                     replyMessages={props.replyMessages}
                                                                     addNewDialogueMessage={props.addNewDialogueMessage}
                                                                     getNewDialogueMessage={props.getNewDialogueMessage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/blog' render={() => <Blog/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
