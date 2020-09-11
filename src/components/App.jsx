import { hot } from 'react-hot-loader/root';
import React from 'react';
import './app.scss';
// Components
import MainBody from './main/MainBody';

const App = () => (
    <div className="screen">
        <img src="https://cdn.pixabay.com/photo/2014/02/19/16/06/curtain-269920_1280.jpg" alt="" className="background"/>
        <div className="content">
            <MainBody/>
        </div>
    </div>
);

export default App;
export const HotApp = hot(App);
