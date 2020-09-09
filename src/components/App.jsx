import { hot } from 'react-hot-loader/root';
import React from 'react';

// Components
import Loadingbar from './header/Loadingbar';
import MainBody from './main/MainBody';

const App = () => (
    <div className="screen">
        <div className="content">
            <Loadingbar/>
            <MainBody/>
        </div>
    </div>
);

export default App;
export const HotApp = hot(App);
