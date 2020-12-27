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
import store, {newStoreType, StateType} from "./data/redux-store"
import DialoguesContainer from "./components/content/dialogues/DialoguesContainer";


type AppPropsType = {
    store: newStoreType
    state: StateType
    dispatch: any
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Sidebar
                    friends={state.sidebarFriends.friends}
                />
                <div className='container-bg'>
                    <Route path='/home' render={() => <MainContent
                        myProfile={state.homePage.myProfile}/>}/>
                    <Route path='/posts' render={() => <MyPosts
                        // postsData={state.homePage.posts}
                        postsData={state.homePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/messages' render={() => <DialoguesContainer
                        dialogues={state.dialoguesPage.dialogues}
                        dialogueMessages={state.dialoguesPage.dialogueMessages}
                        newDialogueMessage={state.dialoguesPage.newDialogueMessage}
                        replyMessages={state.dialoguesPage.replyMessages}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/blog' render={() => <Blog/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
