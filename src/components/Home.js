import { Col, Row } from 'react-bootstrap';
import './Home.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
function Home() {
    return (
        <div className='home'>
            <div className='marotab'>
                <img className='img' src="./images/icon_wab.png" />

                <div className='w'>
                    <span>
                        Website for calculating <br />
                        electricity bill by scanning <br />
                        mobile camera.
                    </span>
                </div>
                <div>
                    <h1 className='ma'>มาร์โรแทบ</h1>
                </div>

                <div className='wed'>
                    <span>
                        เว็บไซต์สำหรับเจ้าของหอพัก ช่วยคำนวณค่าไฟฟ้า <br />
                        ในแต่ละเดือนด้วยกล้องโทรศัพท์มือถือ <br />
                        ลดระยะเวลาการจดค่าไฟฟ้าตามห้องพัก
                    </span>
                    <hr className='line1'></hr>
                </div>

                <hr className='line2'></hr>

            </div>
            <div>
                <hr className='line'></hr>
            </div>

            <div className='unit'>

                <h1 className='bill'>
                    ใบเสร็จรอบเดือน ทุกวันที่ 1 ของแต่ละเดือน
                </h1>
                <Row className="justify-content-md-center ruk">
                    <Col xs="auto">
                        <InputGroup >
                            <InputGroup.Text id="basic-addon1"><span style={{ fontSize: "20px" }}>&#x2315;</span></InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <div>
                    <table border="3" >
                        <thead>
                            <tr>
                                <th colSpan="3">ใบเสร็จ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>นายจำลอง    ประเสริฐพงษ์ </td>
                                <td>01/01/2566</td>
                                <img src='./images/pdf.png'></img>
                                <td>Down load</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td></td>
                                <td>01/01/2566</td>
                                <img src='./images/pdf.png'></img>
                                <td>Down load</td>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td></td>
                                <td>01/01/2566</td>
                                <img src='./images/pdf.png'></img>
                                <td>Down load</td>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td></td>
                                <td>01/01/2566</td>
                                <img src='./images/pdf.png'></img>
                                <td>Down load</td>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td></td>
                                <td>01/01/2566</td>
                                <img src='./images/pdf.png'></img>
                                <td>Down load</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

            <div>
                <hr className='line3'></hr>
            </div>

            {/* <div className='height'>
                หกดหกกดหดดหกดหดด
            </div> */}
            <div>
                <h1>มาร์โรแทบใช้เทคโนโลยีที่ล้ำสมัย</h1>
            </div>

            <div className='backgroud'>
                {/* <img src="./images/bg-miter-02.png" /> */}
                <img src="./images/ocr.png" className='position' />
            </div>
        </div>

    );
}

export default Home;