import { BsFillCameraFill, BsPersonBoundingBox, BsSave, BsBuildingFill, BsSearch, BsCardImage } from "react-icons/bs";
import { Button, Image, Row, Col, Form, InputGroup, Container, ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { dataImg } from '../../data/DataImg';
import OpenCamera from "../CameraPage/OpenCamera";
import SpinerLoad from "../SpinerLoadPage/SpinerLoad";
import NavBar from '../NavBarPage/NavBar';
import { Connects } from "../../data/Connects";
import { ToastAlert } from "../Alert/ToastAlert";
import { format } from "date-fns";
import axios from "axios";
import "./CameraPage.css";
import { CheckCookies } from "../CookiesLogin/CheckCookies";

export const CameraPage = () => {
  const [img, setImg] = useState(dataImg);
  const [confidencePercentage, setConfidencePercentage] = useState(Number);
  const [ShowAlert, setShowAlert] = useState(false);
  const [detailToast, setDetailToast] = useState({ 'status': '', 'result': '' });
  const [isOpencamera, setIsOpencamera] = useState(false);
  const [isPageCamera, setIsPageCamera] = useState(true);
  const [showLoad, setShowLoad] = useState(true);
  const [roomNumber, setRoomNumber] = useState([]);

  function getAPi() {
    axios.get(`${Connects.HOST_NAME}/all-data/status_room`)
      .then((response) => {
        setRoomNumber(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        setShowAlert(true);
        setDetailToast({ 'status': 'Danger', 'result': error.message })
      })
      .finally((done) => {
        setTimeout(() => {
          setShowLoad(false);
        }, 800);
      });
  }

  function imgToTextAPI(img64) {
    setShowLoad(true);
    axios.post(`https://marotab-python-l5xl7xlxna-et.a.run.app/img-to-text`, { 'url_img': img64 })
      .then((response) => {
        const status = response.data.status;
        const result = response.data.result;
        if (status.toLowerCase() === 'success') {
          const formatNumber = result.texts.replace(/(\d{4})(\d+)/, "$1.$2")
          setImg({ ...img, 'unit_present': formatNumber });
          setConfidencePercentage(result.confidences);
        }
      })
      .catch((error) => {
        console.error(error.message);
        setShowAlert(true);
        setDetailToast({ 'status': 'Danger', 'result': error.message })
      })
      .finally(() => {
        setShowLoad(false);
      });
  }

  function setPage() {
    // Page open camera
    setIsOpencamera(!isOpencamera);
    // Page Camera
    setIsPageCamera(!isPageCamera);
  }

  async function setDataImg(dataFromChild) {
    const target = dataFromChild;
    target.status === 'submit' && setImg({ ...img, 'piture': target.img64 });
    await setPage();
  }

  function selectRoomNumber(event) {
    const { value, name } = event.target;
    setImg({ ...img, [name]: value });
  }

  async function findDataImgByRoomNumber(roomNumber) {
    setShowLoad(true);
    axios.get(`${Connects.HOST_NAME}/find-dataImg-byRoomnumber/${roomNumber}`)
      .then((response) => {
        const status = response.data.status;
        const result = response.data.result;
        if (status.toLowerCase() === 'success') {
          setImg(result);
        }
        else if (status.toLowerCase() === 'empty') {
          setImg({ ...dataImg, 'room_number': img.room_number });
          setConfidencePercentage(0);
        }
      })
      .catch((error) => { console.error(error.message); setShowAlert(true); setDetailToast({ 'status': 'Danger', 'result': error.message }) })
      .finally(() => { setShowLoad(false); })

  }

  function save() {
    setShowLoad(true);
    // set date time
    img.date_call = format(new Date(), 'yyyy-MM-dd');
    img.time_call = format(new Date(), 'HH:mm');
    const data = { target: JSON.stringify(img), table: 'camera_capture_unit' };
    axios.post(`${Connects.HOST_NAME}/save-img`, data)
      .then((response) => {
        const status = response.data.status;
        // const result = response.data.result;
        // set alert toast
        setShowAlert(!ShowAlert);
        setDetailToast({ 'status': status, 'result': status })
      })
      .catch((error) => {
        console.error(error.message);
        setShowAlert(true);
        setDetailToast({ 'status': 'Danger', 'result': error.message })
      })
      .finally(() => setShowLoad(false));
  }

  function editUnitPresent(event) {
    const { value, name } = event.target;
    const formatNumber = value.replace(/(\d{4})(\d+)/, "$1.$2");
    setImg({ ...img, [name]: formatNumber });
  }


  function handlerFile(event) {
    const { files } = event.target;
    console.log(files[0]);
    console.log(URL.createObjectURL(files[0]));
    setImg({ ...img, piture: URL.createObjectURL(files[0]) })
    // document.querySelector('#file-name').click();
  }

  useEffect(() => {
    setTimeout(() => {
      getAPi();
      setShowLoad(false);
    }, 800);
  }, [])

  return (
    <>
      <CheckCookies />
      
      <NavBar name="ถ่ายรูปหน้าปัดมิเตอร์" />
      <SpinerLoad showLoad={showLoad} />


      <ToastAlert alert={ShowAlert} toast={detailToast} close={() => setShowAlert(false)} />

      {/* Page Camera */}
      {isPageCamera && (
        <>
          <Container className="mt-5">
            <Row md={4} className="justify-content-md-center">
              <Col md="8" className="mb-2">

                <center>
                  {/* className="camera" */}
                  {img.piture
                    ?
                    <Image src={img.piture} fluid style={{ borderRadius: "10px" }} />
                    :
                    < BsCardImage size={350} style={{ opacity: '0.4' }} />
                  }
                  <Button variant="dark" onClick={setPage} style={{ margin: "3%" }}><BsFillCameraFill /></Button>
                </center>
              </Col>

              <Col md="4" className="mb-2 bg-container">

                <Row md={4} className="justify-content-md-center">
                  <Col md="12" className="mb-2" >
                    <Form.Label><BsBuildingFill /> เลือกห้อง</Form.Label>
                    <InputGroup className="mb-2">
                      <Form.Select name='room_number' defaultValue={img.room_number} onChange={selectRoomNumber}>
                        <option value="0" >-- เลือกห้อง --</option>
                        {roomNumber.map((dataList, index) => {
                          return (
                            dataList.status && (
                              <option key={index} value={dataList.id} >
                                {dataList.room_number}
                              </option>
                            )
                          )
                        })}
                      </Form.Select>
                      <Button variant="light" onClick={() => findDataImgByRoomNumber(img.room_number)} >
                        <BsSearch />
                        &nbsp;
                        Search...
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>

                <Row mb={4} >
                  {/* className="justify-content-md-center" */}

                  {/* <Form.Group as={Row} className="mb-1"> */}
                  <Col md="12" className="mb-2">
                    <Form.Label><BsPersonBoundingBox /> ผลการแสกน</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="0"
                        maxLength={6}
                        name="unit_present"
                        value={img.unit_present}
                        onChange={editUnitPresent}
                      />
                      <Button variant="light" onClick={() => { imgToTextAPI(img.piture) }} >
                        <BsPersonBoundingBox />
                        &nbsp;
                        Scan
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col md="12" className="mb-3">
                    <ProgressBar>
                      <ProgressBar variant="success" now={confidencePercentage} label={`${confidencePercentage}%`} key={1} />
                      {confidencePercentage !== 0 && (
                        < ProgressBar variant="danger" now={100 - confidencePercentage} key={2} />
                      )}
                    </ProgressBar>
                  </Col>
                  <Col md="12" className="mb-2">
                    <Button variant="secondary" onClick={save} >
                      <BsSave />
                      &nbsp;
                      Save
                    </Button>
                  </Col>
                  <Col md="12" className="mt-5">
                    <Image src="/images/motor2.jpg" fluid style={{ borderRadius: "5px" }} />
                  </Col>
                  <Col md="12" className="mt-2">
                    <center>
                      <span><i>*ภาพตัวอย่างในการถ่าย</i></span>
                    </center>
                  </Col>
                  {/* </Form.Group > */}

                </Row>

              </Col>
            </Row>
          </Container>
        </>
      )
      }

      {/* Page open camera */}
      {
        isOpencamera && (
          <OpenCamera target={setDataImg} />
        )
      }

    </>
  )
}
