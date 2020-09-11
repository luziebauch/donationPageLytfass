import React from 'react';
import '../app.scss';

const QRCode = () => (
    <div className="qrCodeContainer">
        <div className="imageQR">
            <img
                src="https://k8s.az-chayns.space/qrCodeGenerator/svg?value=https%3A%2F%2Fchayns.cc%2Fdnrvam&color=005EB8&text=Spenden&icon=TobitLogo"
                alt="QR Code"
                width="300vw"
            />
        </div>
        <div className="textQR">
            Gefällt Dir die Show?
            <br/>
            Dann spende doch eine Kleinigkeit an Olaf Schubert!
        </div>
    </div>
);
export default QRCode;
