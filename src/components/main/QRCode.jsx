import React from 'react';
import '../app.scss';

const QRCode = () => (
    <div className="qrCode">
        <div className="imageQR"><img src="../../images/Donation.png" alt="QR Code" width="400px"/></div>
        <div className="textQR">Eine Spende an den Künstler</div>
    </div>
);
export default QRCode;
