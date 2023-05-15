import { BsFillCameraFill } from "react-icons/bs";
import { Button, Form, Image } from "react-bootstrap";
import { BiImageAdd, BiSave, BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import { dataImg } from '../data/DataImg';
import OpenCamera from "./OpenCamera";
import SpinerLoad from "./SpinerLoad";
import "./CameraPage.css";

export const CameraPage = () => {
  const [img, setImg] = useState(dataImg);
  const [text, setText] = useState("");
  const [isOpencamera, setIsOpencamera] = useState(false);
  const [isPageCamera, setIsPageCamera] = useState(true);
  const [showLoad, setShowLoad] = useState(true);

  function setPage() {
    // Page open camera
    setIsOpencamera(!isOpencamera);
    // Page Camera
    setIsPageCamera(!isPageCamera);
  }

  function setDataImg(dataFromChild) {
    const target = dataFromChild;
    // console.log(target);
    if (target.status === 'submit') {
      setImg({ ...img, 'img64': target.img64 });
    }
    setPage();
  }

  function save() {
    console.log(img);
  }

  async function scanImgToText() {

  }

  useEffect(() => {
    setTimeout(() => {
      setShowLoad(false);
    }, 800);
  }, []);

  return (
    <>

      <SpinerLoad showLoad={showLoad} />

      {/* Page Camera */}
      {isPageCamera && (
        <center>
          <h1>Camera Page</h1>
          <Button variant="light" onClick={setPage}><BsFillCameraFill /></Button>
          <br />
          {img.img64
            ?
            <Image src={img.img64} fluid />
            :
            <BiImageAdd size={150} />
          }
          <br />
          <Button onClick={save}><BiSave /> Save</Button>
          <Button variant="secondary" onClick={scanImgToText}><BiSearch /> Scan</Button>
          <br />
          <Form.Control type="text" value={text} readOnly />
        </center>
      )}


      {/* Page open camera */}
      {isOpencamera && (
        <OpenCamera target={setDataImg} />
      )}

    </>
  )
}
