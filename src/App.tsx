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


function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Sidebar/>
                <div className='container-bg'>
                    <Route path='/home' component={MainContent}/>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/news' component={News}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/contacts' component={Contacts}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
