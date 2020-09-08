import React from 'react';
import '../app.scss';
import { ProgressBar } from 'chayns-components/lib';

const Loadingbar = () => (
    <div className="loadingbar">
        <ProgressBar value={75}>
            100€
        </ProgressBar>
    </div>
);
export default Loadingbar;
