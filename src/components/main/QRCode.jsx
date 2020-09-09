import React from 'react';
import '../app.scss';

const QRCode = () => (
    <div className="qrCode">
        <div className="imageQR"><img src="../../images/Donation.png" alt="QR Code" width="400px"/></div>
        <div className="textQR">
            Gefällt dir die Show?
        </div>
        <div className="textArtist">
            Dann spende doch eine Kleinigkeit an
        </div>
        <div className="artist">
            Olaf Schubert!
        </div>
    </div>
);
export default QRCode;
