import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import MainContent from "./components/content/MainContent";
import Messages from "./components/content/messages/Messages";
import {BrowserRouter, Route} from 'react-router-dom';
import Blog from "./components/content/blog/Blog";
import News from "./components/content/news/News";
import Contacts from "./components/content/contacts/Contacts";
import MyPosts from "./components/content/posts/MyPosts";


function App() {
    let posts = [{id: 1, name: "Renat", message: "Hey, today I have an opinion about you!", likecount: 11, btnName: "Likes"},
        {id: 2, name: "Lena", message: "Today I'm talking about them!", likecount: 111, btnName: "Likes"}];

    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Sidebar/>
                <div className='container-bg'>
                    <Route path='/home' render={()=><MainContent postsData={posts}/>}/>
                    <Route path='/messages' render={()=><Messages />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/contacts' component={Contacts}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
