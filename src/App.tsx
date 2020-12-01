import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import MainContent from "./components/content/home/MainContent";
import Messages from "./components/content/messages/Messages";
import {BrowserRouter, Route} from 'react-router-dom';
import Blog from "./components/content/blog/Blog";
import News from "./components/content/news/News";
import Contacts from "./components/content/contacts/Contacts";


type AppPropsType = {
    myProfile: {
        src: string
        alt: string
        name: string,
        hobbies: Array<string>
    }
    posts: Array<{ id: number, avatar: string, alt: string, message: string, likecount: number, btnName: string }>
    dialoguesPage: {
        dialogues: Array<{ id: number, name: string }>,
        dialogueMessages: Array<{ id: number, text: string }>
    }
    friends: Array<{ id: number, name: string }>
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Sidebar friends={props.friends}
                />
                <div className='container-bg'>
                    <Route path='/home' render={() => <MainContent postsData={props.posts}  myProfile={props.myProfile}/>}/>
                    <Route path='/messages' render={() => <Messages dialoguesPage={props.dialoguesPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/blog' render={() => <Blog/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
