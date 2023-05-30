import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import { Button, Image, Modal } from 'react-bootstrap';
import 'react-html5-camera-photo/build/css/index.css';
import { BsFillCameraFill, BsPower, BsPhoneFlip, BsCheck2Circle, BsRepeat, BsArrowRepeat } from "react-icons/bs";
import React, { useState } from 'react';

function OpenCamera(props) {
    const [tempImg, setTempImg] = useState({ 'img64': null });
    const [openModel, setOpenModel] = useState(false);
    const [cameraActive, setCameraActive] = useState(true);
    const [facingMode, setFacingMode] = useState(FACING_MODES.ENVIRONMENT);


    function handleTakePhoto(dataUri) {
        setTempImg({ 'img64': dataUri });
        setOpenModel(!openModel);
    }

    function SubmitImg() {
        setCameraActive(false);
        props.target({ 'img64': tempImg.img64, 'status': 'submit' });
        // window.location.reload();
    }

    function close() {
        props.target({ status: 'close' });
    }

    function changeCamera() {
        setFacingMode(
            facingMode.toLocaleLowerCase() !== 'user' ?
                FACING_MODES.USER :
                FACING_MODES.ENVIRONMENT
        );
    }

    function revertCamera() {
        const cameraElement = document.getElementById('camera');
        cameraElement.style.transform = 'rotate(90deg)';
    }

    return (
        <>
            {cameraActive && (
                <>
                    <Camera
                        imageCompression={0.97}
                        idealFacingMode={facingMode}
                        isSilentMode={true}
                        onTakePhoto={handleTakePhoto}
                        isImageMirror={false}
                    />
                    <center style={{ margin: "10px" }}>
                        <Button variant='secondary' onClick={changeCamera} style={{ marginRight: "1rem" }}>
                            <BsPhoneFlip />
                        </Button>
                        <Button variant='secondary' onClick={revertCamera}>
                            <BsArrowRepeat />
                        </Button>
                    </center>
                </>
            )}

            {tempImg.img64 && (
                <Modal
                    show={openModel}
                    onHide={() => setOpenModel(!openModel)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Photo Image <BsFillCameraFill /></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* <p>Modal body text goes here.</p> */}
                        <center>
                            <Image src={tempImg.img64} fluid />
                        </center>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="outline-dark" onClick={close}><BsPower /></Button>
                        <Button variant="secondary" onClick={() => setOpenModel(!openModel)}><BsRepeat /> Again</Button>
                        <Button variant="success" onClick={SubmitImg}><BsCheck2Circle /> Submit</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default OpenCamera;