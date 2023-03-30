import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {StateType} from "./components/redux/State";


type AppProps = {
    state: StateType
    addPost: (postMessage: string) => void
}


function App(props:AppProps) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">

                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData}/>}/>
                    <Route path={'/profile'} element={<Profile addPost={props.addPost} posts={props.state.profilePage.posts}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
