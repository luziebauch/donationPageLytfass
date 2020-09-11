import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './app.scss';
// Components
import MainBody from './main/MainBody';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            windowHeight: 900,
        };
    }

    componentDidMount() {
        const retVal = chayns.addWindowMetricsListener((e) => {
            if (e !== this.state.windowHeight) {
                this.setState({ windowHeight: e });
            }
            console.log(e);
        }, true);
        return () => chayns.removeWindowMetricsListener(retVal);
    }

    render() {
        return (
            <div className="screen" style={{ height: this.state.windowHeight }}>
                <img src="https://cdn.pixabay.com/photo/2014/02/19/16/06/curtain-269920_1280.jpg" alt="" className="background"/>
                <div className="content">
                    <MainBody/>
                </div>
            </div>
        );
    }
}
/* const App = () => (
    <div className="screen">
        <img src="https://cdn.pixabay.com/photo/2014/02/19/16/06/curtain-269920_1280.jpg" alt="" className="background"/>
        <div className="content">
            <MainBody/>
        </div>
    </div>
); */

export default App;
export const HotApp = hot(App);
