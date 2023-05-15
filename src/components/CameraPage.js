import { BsFillCameraFill } from "react-icons/bs";
import { Button, Image, Row, Col, Form, InputGroup } from "react-bootstrap";
import { BiImageAdd } from "react-icons/bi";
import { useEffect, useState } from "react";
import { dataImg } from '../data/DataImg';
import OpenCamera from "./OpenCamera";
import SpinerLoad from "./SpinerLoad";
import NavBar from './NavBar';
import "./CameraPage.css";

export const CameraPage = () => {
  const [img, setImg] = useState(dataImg);
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
    target.status === 'submit' && setImg({ ...img, 'img64': target.img64 });
    setPage();
  }

  function save() {
    console.log(img);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowLoad(false);
    }, 800);
  }, [])

  return (
    <>
      <NavBar name="กรุณาถ่ายรูป" />
      <SpinerLoad showLoad={showLoad} />


      {/* Page Camera */}
      {isPageCamera && (
        <center className="camera">
          <Row md={4} className="justify-content-md-center">
            <Col>
              {img.img64
                ?
                <Image src={img.img64} fluid />
                :
                <BiImageAdd size={500} />
              }
              <Button variant="dark" onClick={setPage} style={{ margin: "10%" }}><BsFillCameraFill /></Button>
              <br />
            </Col>
          </Row>

          <br />
          <Row mb={4} className="justify-content-md-center">
            <Col xs lg="2">
              <Form.Group controlId="formGridState">
                <Form.Select aria-label="Default select example">
                  <option>Room Number</option>
                  <option value="001">001</option>
                  <option value="002">002</option>
                  <option value="003">003</option>
                </Form.Select>
              </Form.Group >

            </Col>
            <Col xs lg="2">
              <Form.Group controlId="formGridState">
                <InputGroup className="mb-2">
                  <Form.Control disabled value="0" />
                </InputGroup>
              </Form.Group>

            </Col>
            <Row className="mb-6" className="justify-content-md-left">
              <Col xs lg="6" style={{ display: "" }} >
                <Button onClick={save}>scan</Button>
              </Col>
              <Col xs lg="6" style={{ display: "" }} >
                <Button onClick={save}>Save</Button>
              </Col>
            </Row>
          </Row>


        </center>
      )}
      {/* Page open camera */}
      {isOpencamera && (
        <OpenCamera target={setDataImg} />
      )}

    </>
  )
}
