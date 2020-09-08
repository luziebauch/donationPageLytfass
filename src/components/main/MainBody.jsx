import React from 'react';
import '../app.scss';
import QRCode from './QRCode';
import ListDonors from './ListDonors';

const mainBody = () => (
    <div className="mainBody">
        <QRCode/>
        <ListDonors/>
    </div>
);
export default mainBody;
