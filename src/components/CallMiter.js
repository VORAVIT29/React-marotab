import './CallMiter.css'
import { Button, Table, Form, Container, Row, Col } from 'react-bootstrap'
import NavBar from './NavBar';

function CallMiter() {
    return (
        <>
            <NavBar name="หน้าคำนวน" />
            <Container>
                <Row md={6}>
                    <Col>
                        <Form.Select aria-label="Default select example" className='position-grid'>
                            <option>Room Number</option>
                            <option value="001">001</option>
                            <option value="002">002</option>
                            <option value="003">003</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Table striped>
                    <thead style={{ textAlign: 'center' }}>
                        <th></th>
                        <th>Unit Present</th>
                        <th>Unit Before</th>
                        <th>Unit Used</th>
                        <th>Electricity rate</th>
                        <th>Electricity Bill (Batch)</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Electricity bill</td>
                            <td>
                                <Form.Control />
                            </td>
                            <td>
                                <Form.Control />
                            </td>
                            <td>
                                <Form.Control disabled value="0" />
                            </td>
                            <td>
                                <Form.Control />
                            </td>
                            <td>
                                <Form.Control disabled value="0" />
                            </td>
                        </tr>
                        <tr>
                            <td>Room rental</td>
                            <td>
                                <Form.Control />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Form.Control disabled value="0" />
                            </td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td colSpan={3}>
                                <Form.Control />
                            </td>
                            <td></td>
                            <td>
                                <Form.Control disabled value="0" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total (bath)</td>
                            <td>
                                <Form.Control disabled value="0" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Row md={4}>
                    <Col>
                        <Button variant="light" style={{ marginRight: '10px' }}>Calculate</Button>
                        <Button variant="light">Check Bill PDF</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CallMiter;