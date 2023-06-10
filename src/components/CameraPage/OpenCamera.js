import { BsFillCameraFill, BsPower, BsPhoneFlip, BsCheck2Circle, BsRepeat, BsArrowRepeat, BsCrop } from "react-icons/bs";
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import { Button, Col, Modal, Row, Image as ImageBootstrap } from 'react-bootstrap';
import 'react-html5-camera-photo/build/css/index.css';
import 'react-image-crop/dist/ReactCrop.css';
import React, { useState } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'

// Load crop defalut
function imageCropDefalut(width, height) {
    return (
        centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                16 / 9,
                width,
                height
            ),
            width,
            height
        )
    )
}

function OpenCamera(props) {
    const [tempImg, setTempImg] = useState({ 'img64': null });
    const [openModel, setOpenModel] = useState(false);
    const [cameraActive, setCameraActive] = useState(true);
    const [facingMode, setFacingMode] = useState(FACING_MODES.ENVIRONMENT);
    const [cropEdit, setCropEdit] = useState(true);

    // Crop image
    const [crop, setCrop] = useState(null);
    const [completeCrop, setCompleteCrop] = useState();


    function handleTakePhoto(dataUri) {
        setTempImg({ 'img64': dataUri });
        setOpenModel(!openModel);
    }

    function SubmitImg() {
        setCameraActive(false);
        console.log(cropEdit);
        const imageResult = !cropEdit ? setCanva() : tempImg.img64;
        props.target({ 'img64': imageResult, 'status': 'submit' });
        // window.location.reload();
    }

    function setCanva() {
        const canvas = document.createElement('canvas');
        canvas.width = completeCrop.width;
        canvas.height = completeCrop.height;
        const ctx = canvas.getContext('2d');

        const pixelRatio = window.devicePixelRatio;
        canvas.width = completeCrop.width * pixelRatio;
        canvas.height = completeCrop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        const image = new Image();
        image.src = tempImg.img64;
        ctx.drawImage(
            image,
            completeCrop.x,
            completeCrop.y,
            completeCrop.width,
            completeCrop.height,
            0,
            0,
            completeCrop.width,
            completeCrop.height,
        );
        const image64 = canvas.toDataURL('image/jpeg');
        return image64
        // setOutput(image64);
    }

    const close = () => props.target({ status: 'close' });

    function changeCamera() {
        setFacingMode(
            facingMode.toLocaleLowerCase() !== 'user' ?
                FACING_MODES.USER :
                FACING_MODES.ENVIRONMENT
        );
    }

    function onImageLoad(e) {
        const { width, height } = e.currentTarget;
        setCrop(imageCropDefalut(width, height));
    }

    // function revertCamera() {
    //     const cameraElement = document.getElementById('camera');
    //     cameraElement.style.transform = 'rotate(90deg)';
    // }

    return (
        <>
            {!!cameraActive && (
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
                        {/* <Button variant='secondary' onClick={revertCamera}>
                            <BsArrowRepeat />
                        </Button> */}
                    </center>
                </>
            )}

            {!!tempImg.img64 && (
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
                            {!!cropEdit && (
                                <ImageBootstrap src={tempImg.img64} fluid />
                            )}

                            {!cropEdit && (
                                <ReactCrop
                                    crop={crop}
                                    onChange={(crop, percentCrop) => setCrop(percentCrop)}
                                    onComplete={(crop, percentCrop) => setCompleteCrop(crop)}
                                >
                                    <ImageBootstrap src={tempImg.img64} onLoad={onImageLoad} fluid />
                                </ReactCrop>
                            )}

                            {/* {!!completeCrop && (
                                <img
                                    alt=""
                                    src={output}
                                    style={{
                                        width: completeCrop.width,
                                        height: completeCrop.height
                                    }}
                                />
                            )} */}
                        </center>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant={!cropEdit ? 'outline-danger' : 'outline-primary'}
                            onClick={() => setCropEdit(!cropEdit)}
                        >
                            <BsCrop style={{ marginBottom: '3px' }} /> {!cropEdit ? 'Close' : 'Open'} crop
                        </Button>
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