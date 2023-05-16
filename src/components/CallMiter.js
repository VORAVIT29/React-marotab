import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import NavBar from './NavBar';
import "./CallMiter.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Connects } from '../data/Connects';
import SpinerLoad from './SpinerLoad';

function CallMiter() {
    const [roomNumber, setRoomNumber] = useState([]);
    const [showLoad, setShowLoad] = useState(true);

    function getAPi() {
        axios.get(`${Connects.HOST_NAME}/all-data/status_room`)
            .then((response) => {
                setRoomNumber(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            })
            .finally((done) => {
                setTimeout(() => {
                    setShowLoad(false);
                }, 800);
            });
    }

    useEffect(() => {
        setTimeout(() => {
            setShowLoad(false);
            getAPi();
        }, 800);
    }, [])

    return (
        <>
            <NavBar name="กรุณาใส่ค่าที่คุณต้องการคำนวณ" />
            <SpinerLoad showLoad={showLoad} />

            <div className='call-miter-bg-img'>
                <Container >
                    <Row md={6}>
                        <Col>
                            <Form.Select aria-label="Default select example" className='position-grid'>
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
                        </Col>
                        <Col className='callmiter-name' style={{ textAlign: 'center' }} md={6}>
                            <Form.Label className='position-grid-label' >ชื่อ-สกุล : นายจำลอง ประเสริฐพงษ์ </Form.Label>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label className='callmiter'>Electricity Bill</Form.Label>
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label>Unit Present</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label>Unit Before</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>Uints used</Form.Label>
                            <Form.Control disabled value="0" />
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>Electric rate</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>(Batch)</Form.Label>
                            <Form.Control disabled value="0" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-5">
                        <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label className='callmiter'>Room rental</Form.Label>
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label>(Batch)</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>(Batch)</Form.Label>
                            <Form.Control disabled value="0" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-5">
                        <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label className='callmiter'>Other</Form.Label>
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label>(Batch)</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>(Batch)</Form.Label>
                            <Form.Control disabled value="0" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group><Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            {/* <Form.Control /> */}
                        </Form.Group>
                        <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>Total(Batch)</Form.Label>
                            <Form.Control disabled value="0" />
                        </Form.Group>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row md={12}>

                        <Col md={12}>
                            <Button variant="primary" style={{ marginRight: '10px' }}>Calculate</Button>
                            <Button variant="primary">Check Bill PDF</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default CallMiter;