import { hot } from 'react-hot-loader/root';
import React from 'react';

// Components
import Loadingbar from './header/Loadingbar';
import MainBody from './main/MainBody';

const App = () => (
    <div className="screen">
        { /* <img className="video" src="https://cdn.pixabay.com/photo/2017/08/10/01/44/concert-2616946_1280.jpg" alt=""/> */}
        <div className="content">
            <Loadingbar/>
            <MainBody/>
        </div>
    </div>
);

export default App;
export const HotApp = hot(App);
