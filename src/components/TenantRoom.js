import { Modal, Container, Form, Button, Row, Col } from 'react-bootstrap';
import './TenantRoom.css';

function TenantRoom(props) {
    // show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
    return (
        <>
            <Modal {...props} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img src='./images/icon_wab.png' alt='icon-web' width="50" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-img'>
                    <center>
                        <h3><strong>
                            <div className='title-box'>
                                <span className='title'>
                                    <u>ข้อมูลผู้เช่า</u>
                                </span>
                            </div>
                        </strong></h3>
                        {/* <img src='./images/title-ten.png' alt='title-ten' width="1000" /> */}
                    </center>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">ห้องเลขที่</Form.Label>
                                        <Col sm="4"><Form.Control type='text' /></Col>
                                        {/* defaultValue="email@example.com" */}
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateIn">
                                        <Form.Label column sm="2">วันที่เข้าพัก</Form.Label>
                                        <Col sm="4"><Form.Control type='date' /></Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateOutAndIn">
                                        <Col sm="4">
                                            <Form.Check
                                                type="radio"
                                                label="กำหนดวันออก"
                                                name="check-date"
                                                id="out-radio"
                                                style={{ marginBottom: '1rem' }}
                                            />
                                            <Form.Control type='date' style={{ marginBottom: '1rem' }} />
                                        </Col>
                                        <Col sm="4">
                                            <Form.Check
                                                type="radio"
                                                label="ไม่มีกำหนดวันออก"
                                                name="check-date"
                                                id="not-out-radio"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextIDNumber">
                                        <Form.Label column sm="4" className='align-right'>บัตรประชาชน</Form.Label>
                                        <Col sm="7"><Form.Control type='text' maxLength={13} /></Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                        <Form.Label column sm="4" className='align-right'>ชื่อ</Form.Label>
                                        <Col sm="7"><Form.Control type='text' /></Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
                                        <Form.Label column sm="4" className='align-right'>นามสกุล</Form.Label>
                                        <Col sm="7"><Form.Control type='text' /></Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhonNumber">
                                        <Form.Label column sm="4" className='align-right'>เบอร์โทร</Form.Label>
                                        <Col sm="7"><Form.Control type='number' /></Col>
                                    </Form.Group>
                                    <center>
                                        <Button variant="secondary" className='btn-pos'>แก้ไข</Button>
                                        <Button variant="light" className='btn-pos'>บันทึก</Button>
                                    </center>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <img src='./images/card-icon.png' alt='card-web' width="300" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                {/* <Modal.Footer>
                   
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default TenantRoom;