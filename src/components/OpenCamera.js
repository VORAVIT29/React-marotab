import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function OpenCamera() {
    return (
        <>
            <center>
                <h1>
                    Camera Opening....
                </h1>
                <Camera isFullscreen={false} />
            </center>
        </>
    );
}

export default OpenCamera;