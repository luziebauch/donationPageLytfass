import React from 'react';
import '../app.scss';

const QRCode = () => (
    <div className="qrCodeContainer">
        <div className="imageQR"><img src="../../images/Donation.png" alt="QR Code" width="300vw"/></div>
        <div className="textQR">
            Gefällt Dir die Show?
            <br/>
            Dann spende doch eine Kleinigkeit an Olaf Schubert!
        </div>
    </div>
);
export default QRCode;
