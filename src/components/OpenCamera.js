import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import { Button, Image, Modal } from 'react-bootstrap';
import 'react-html5-camera-photo/build/css/index.css';
import { BsFillCameraFill } from "react-icons/bs";
import React, { useState } from 'react';

function OpenCamera(props) {
    const [tempImg, setTempImg] = useState({ 'img64': null });
    const [openModel, setOpenModel] = useState(false);
    const [cameraActive, setCameraActive] = useState(true);


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

    return (
        <>
            {cameraActive && (
                <Camera
                    imageCompression={0.97}
                    idealFacingMode={FACING_MODES.USER}
                    isSilentMode={true}
                    onTakePhoto={handleTakePhoto}
                />
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
                        <Button variant="light" onClick={close}>Cancle</Button>
                        <Button variant="dark" onClick={() => setOpenModel(!openModel)}>Again</Button>
                        <Button variant="secondary" onClick={SubmitImg}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default OpenCamera;