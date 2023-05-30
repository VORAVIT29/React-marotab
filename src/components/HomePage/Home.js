import InputGroup from 'react-bootstrap/InputGroup';
import GenReport from '../PrintReport/GenReport';
import { Connects } from '../../data/Connects';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Home.css';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

function Home() {
    const [reportList, setReportList] = useState([]);
    const [roomNumber, setRoomnumber] = useState([]);


    const setRoom = () => {
        axios.get(`${Connects.HOST_NAME}/all-data/status_room`)
            .then((response) => {
                const result = response.data;
                setRoomnumber(result);
            })
            .catch((err) => console.error(err.message));
    }

    const handlerchange = (event) => {
        const { value } = event.target;
        axios.get(`${Connects.HOST_NAME}/find-callmiter-list/${value}`)
            .then((response) => {
                const status = response.data.status;
                const result = response.data.result;
                if (status.toLowerCase() === 'success')
                    setReportList(result);
                else setReportList([]);
            })
            .catch((err) => console.error(err.message))
    }

    const formatDate = (date) => {
        const dataYear = format(new Date(date), 'd MMM yyyy', { locale: th });
        const year = format(new Date(date), 'yyyy', { locale: th });
        const convertYear = Number(year) + 543;
        return dataYear.replace(year, convertYear.toString());
    }

    useEffect(() => {
        setRoom();
    }, []);

    return (
        <div className='home'>
            <div className='home-marotab'>
                <img className='img' src="/images/icon_wab.png" alt='' />

                <div className='home-w'>
                    <span>
                        Website for calculating <br />
                        electricity bill by scanning <br />
                        mobile camera.
                    </span>
                </div>
                <div>
                    <b>
                        <h1 className='ma'>มาร์โรแทบ</h1>
                    </b>

                </div>

                <div className='wed'>
                    <span>
                        เว็บไซต์สำหรับเจ้าของหอพักช่วยคำนวณค่าไฟฟ้า
                        ในแต่ละเดือนด้วยกล้องโทรศัพท์มือถือ
                        ลดระยะเวลาการจดค่าไฟฟ้าตามห้องพัก
                    </span>
                    <hr className='line1'></hr>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>

            <br></br>
            <br></br>
            <hr className='line'></hr>

            <div className='unit'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='bill'>
                    ใบเสร็จรอบเดือน ทุกวันที่ 1 ของแต่ละเดือน
                </h1>
                <br></br>

                <div>
                    <Row className="justify-content-md-center ruk">
                        <Col xs="auto">
                            <InputGroup >
                                <InputGroup.Text id="basic-addon1"><span style={{ fontSize: "20px" }}>&#x2315;</span></InputGroup.Text>
                                {/* <Form.Control
                                    aria-label="RoomNumber"
                                    aria-describedby="basic-addon1"
                                /> */}
                                <Form.Select onChange={handlerchange}>
                                    <option value="0" >-- เลือกห้อง --</option>
                                    {roomNumber.map((data, index) => {
                                        return (
                                            data.status && (
                                                <option key={index} value={data.id}>{data.room_number}</option>
                                            )
                                        );
                                    })}
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <div className='home-table-bill'>
                        <table className='ta'>
                            <tr className='t'>
                                <th colSpan={4} className='b p' style={{ color: "white" }}>ใบเสร็จ</th>
                            </tr>
                            {/* <tr className='t'>
                                <td className='b'>นายจำลอง    ประเสริฐพงษ์</td>
                                <td className='b'>01/01/2566</td>
                                <td className='b'>
                                    <img src='./images/pdf.png'></img>
                                    <br></br>
                                    <Button variant="secondary">Down load PDF</Button>{' '}
                                </td>
                                <td></td>
                            </tr> */}
                            {reportList.map((data, index) => {
                                return (
                                    <tr className='t' key={index}>
                                        <td className='b'>{data.fullname}</td>
                                        <td className='b'>{formatDate(data.date_call)}</td>
                                        {/* <td className='b'></td> */}
                                        <td className='b'>
                                            <img src='/images/pdf.png' alt='ruk' />
                                            <br></br>
                                            <GenReport dataCall={data} info={{ name: data.fullname, last_name: '' }}>
                                                <Button variant="secondary">Down load PDF</Button>
                                            </GenReport>
                                        </td>
                                        <td></td>
                                    </tr>
                                );
                            })}
                        </table>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <hr className='line3'></hr>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h1>
                    <li className='home-mar'>มาร์โรแทบใช้เทคโนโลยีที่ล้ำสมัย</li>
                </h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className='home-vs'>
                    <b>
                        <h1 className='home-text-vscode'>Visual Studio Code</h1>
                    </b>
                    <div>
                        <img className='home-img-vs' src="./images/vscore.png" />
                    </div>
                    <p className='home-text-img-text'>
                        VS Code เป็นโปรแกรม Text Editor ที่ใช้ในการแก้ไขและปรับแต่งโค้ด
                        ที่มีประสิทธิภาพสูง รองรับการเปิดใช้งานภาษาอื่น ๆ ในตัวเว็ปไซต์ที่สร้างขึ้น
                        ใช้ภาษา เช่น CSS, HTML, JavaScript และ React
                    </p>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <div className='home-backgroud3-ocr'>
                <img src="./images/ocr.png" className='home-ocr' />
                <br></br>
                <br></br>
                <br></br>
                <div className='home-total-ocr'>
                    <b>
                        <h1 className='home-text-ocr'>Optical character recognition (OCR)</h1>
                    </b>
                    <br></br>
                    <p className='home-text-p-ocr'>
                        เจ้าของหอพักถ่ายรูปมิเตอร์ก่อนหน้ากับปัจจุบันเพื่อทำการ
                        สแกนภาพโดยใช้ OpenCV เพื่อประมวณผลภาพจากกล้อง
                        โทรศัพท์มือถือ จะได้หน่วยมิเตอร์ก่อนและหน่วยมิเตอร์ปัจจุบัน
                        แล้วบันทึกวันที่-เวลาใน Database
                    </p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <hr></hr>
            <div className='home-sql'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='home-text-sql'>
                    <b>
                        <h1 className='home-head-sql'>Microsoft SQL Server</h1>
                    </b>
                    <div>
                        <img src='./images/sql sever.png' className='home-img-sql'></img>
                    </div>
                    <p className='home-bg-text-sql'>
                        นำเสนอฐานข้อมูลที่ซับซ้อนให้ผู้ใช้งานเข้าใจได้ง่าย
                        โดยใช้ Database Engine สร้างตารางเก็บข้อมูล
                        และภาษาในการเขียนด้วย SQL ส่วนที่ทำในเว็บไซต์นี้ขึ้น
                        เพื่อจะเชื่อมต่อฐานข้อมูล SQL Server ให้ python
                        ดึงข้อมูลที่ต้องการใช้งาน
                    </p>
                </div>


            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='home-context'>
                <b>
                    <h1>
                        <li>ติดต่อเรา</li>
                    </h1>
                </b>
            </div>
            <hr></hr>
            <div className='home-context-tel'>
                <br></br>
                <br></br>
                <p className='home-tel'>
                    <img src='./images/tel.png'></img>
                    :        086-792-1504
                </p>
                <p className='home-face'>
                    <img src='./images/face.png'></img>
                    :     LooktaLUCK@hotmail.com
                </p>
                <p className='home-line'>
                    <img src='./images/line1.png'></img>
                    :   @lookTaPeech
                </p>
                <br></br>
            </div>
        </div >

    );
}

export default Home;