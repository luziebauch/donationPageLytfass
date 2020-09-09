import { hot } from 'react-hot-loader/root';
import React from 'react';

// Components
// import Loadingbar from './header/Loadingbar';
import Heading from './header/Heading';
import MainBody from './main/MainBody';

const App = () => (
    <div className="screen">
        <img src="https://cdn.pixabay.com/photo/2014/02/19/16/06/curtain-269920_1280.jpg" alt="" className="background" width="100%"/>
        <div className="content">
            <Heading/>
            <MainBody/>
        </div>
    </div>
);

export default App;
export const HotApp = hot(App);
