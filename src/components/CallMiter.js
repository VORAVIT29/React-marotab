import { Button, Table, Form, Container, Row, Col, InputGroup, Modal } from 'react-bootstrap'
import NavBar from './NavBar';
import "./CallMiter.css";

function CallMiter() {
    return (
        <>
            <NavBar name="กรุณาใส่ค่าที่คุณต้องการคำนวณ" />
            <div className='call-miter-bg-img'>
                <Container >
                    <Row md={6}>
                        <Col>
                            <Form.Select aria-label="Default select example" className='position-grid'>
                                <option>Room Number</option>
                                <option value="001">001</option>
                                <option value="002">002</option>
                                <option value="003">003</option>
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