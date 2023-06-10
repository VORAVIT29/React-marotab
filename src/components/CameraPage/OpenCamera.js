import { BsFillCameraFill, BsPower, BsPhoneFlip, BsCheck2Circle, BsRepeat } from "react-icons/bs";
import { Button, Col, Modal, Row, Image as ImageBootstrap } from 'react-bootstrap';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import UseDebounceEffect from "./Crop/UseDebounceEffect";
import 'react-html5-camera-photo/build/css/index.css';
import React, { useRef, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import { BiCrop } from "react-icons/bi";
import './OpenCamera.css';


// Load crop defalut
function imageCropDefalut(naturalWidth, naturalHeight) {
    return (
        centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                16 / 9,
                naturalWidth,
                naturalHeight
            ),
            naturalWidth,
            naturalHeight
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
    const [completeCrop, setCompleteCrop] = useState(null);
    const previewCanvasRef = useRef(null);
    const imgRef = useRef(null);

    UseDebounceEffect(
        async () => {
            if (completeCrop?.width && completeCrop?.height &&
                imgRef.current && previewCanvasRef.current) {
                setCanva();
                // CanvasPreview(
                //     imgRef.current,
                //     previewCanvasRef.current,
                //     completeCrop
                // );
            }
        },
        100,
        // [completeCrop, scale, rotate]
        [completeCrop]
    );


    function handleTakePhoto(dataUri) {
        setTempImg({ 'img64': dataUri });
        setOpenModel(!openModel);
    }

    function SubmitImg() {
        setCameraActive(false);
        const imageResult = !cropEdit ? setCanva() : tempImg.img64;
        props.target({ 'img64': imageResult, 'status': 'submit' });
        // window.location.reload();
    }

    function setCanva() {
        // const canvas = document.createElement('canvas');
        // canvas.width = completeCrop.width;
        // canvas.height = completeCrop.height;
        // const ctx = canvas.getContext('2d');

        // const pixelRatio = window.devicePixelRatio;
        // canvas.width = completeCrop.width * pixelRatio;
        // canvas.height = completeCrop.height * pixelRatio;
        // ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        // ctx.imageSmoothingQuality = 'high';

        // const image = new Image();
        // image.src = tempImg.img64;
        // ctx.drawImage(
        //     image,
        //     completeCrop.x,
        //     completeCrop.y,
        //     completeCrop.width,
        //     completeCrop.height,
        //     0,
        //     0,
        //     completeCrop.width,
        //     completeCrop.height,
        // );
        // const image64 = canvas.toDataURL('image/jpeg');
        // // return image64
        // setOutPut(image64);

        // const canvas = canvasRef.current;

        const canvas = previewCanvasRef.current;
        const ctx = canvas.getContext('2d')

        if (!ctx) {
            throw new Error('No 2d context')
        }

        const { naturalWidth, naturalHeight, width, height } = imgRef.current
        const scaleX = naturalWidth / width
        const scaleY = naturalHeight / height
        const pixelRatio = window.devicePixelRatio || 1

        canvas.width = Math.floor(completeCrop.width * scaleX * pixelRatio)
        canvas.height = Math.floor(completeCrop.height * scaleY * pixelRatio)

        ctx.scale(pixelRatio, pixelRatio)
        ctx.imageSmoothingQuality = 'high'

        const cropX = completeCrop.x * scaleX
        const cropY = completeCrop.y * scaleY

        // const rotateRads = rotate * TO_RADIANS
        const centerX = naturalWidth / 2
        const centerY = naturalHeight / 2

        ctx.save()

        ctx.translate(-cropX, -cropY)
        ctx.translate(centerX, centerY)
        // ctx.rotate(rotateRads)
        // ctx.scale(scale, scale)
        ctx.translate(-centerX, -centerY)
        ctx.drawImage(
            imgRef.current,
            0,
            0,
            naturalWidth,
            naturalHeight,
            0,
            0,
            naturalWidth,
            naturalHeight,
        )

        ctx.restore()

        const image64 = canvas.toDataURL('image/jpeg');
        return image64;
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
        let { width, height } = e.currentTarget;
        width = completeCrop?.width ? completeCrop?.width : width;
        height = completeCrop?.height ? completeCrop?.height : height;
        setCrop(imageCropDefalut(width, height));
    }

    const handelCropEdit = () => {
        setCropEdit(!cropEdit);
    }

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
                    </center>
                </>
            )}

            {!!tempImg.img64 && (
                <>
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
                            <center>
                                {/* Not Edit */}
                                {!!cropEdit && (
                                    <ImageBootstrap src={tempImg.img64} fluid rounded />
                                )}

                                {/* Edit Crop */}
                                {!cropEdit && (
                                    <ReactCrop crop={crop} onChange={(crop, percentCrop) => setCrop(percentCrop)}
                                        onComplete={(c) => setCompleteCrop(c)} >
                                        <ImageBootstrap
                                            ref={imgRef}
                                            src={tempImg.img64}
                                            onLoad={onImageLoad}
                                            fluid
                                        />
                                    </ReactCrop>
                                )}
                                <br />
                                {/* Preview Canvas Image */}
                                {(!!completeCrop && !cropEdit) && (
                                    <>
                                        <div style={{ marginTop: '1rem', padding: '1rem' }}>
                                            <canvas
                                                ref={previewCanvasRef}
                                                className="open-camera-canvas-detail img-fluid"
                                            // style={{
                                            //     width: completeCrop.width,
                                            //     height: completeCrop.height,
                                            // }}
                                            />
                                        </div>
                                    </>
                                )}

                            </center>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant={!cropEdit ? 'outline-danger' : 'outline-primary'}
                                onClick={handelCropEdit} >
                                <BiCrop style={{ marginBottom: '3px' }} /> {!cropEdit ? 'Close' : 'Open'} crop
                            </Button>
                            <Button variant="outline-dark" onClick={close}><BsPower /></Button>
                            <Button variant="secondary" onClick={() => setOpenModel(!openModel)}><BsRepeat /> Again</Button>
                            <Button variant="success" onClick={SubmitImg}><BsCheck2Circle /> Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </>
    );
}

export default OpenCamera;