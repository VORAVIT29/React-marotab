import { BsInboxesFill } from "react-icons/bs";
import { InputGroup, Form, Row, Col } from 'react-bootstrap';
import GenReport from '../PrintReport/GenReport';
import { Connects } from '../../data/Connects';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { th } from 'date-fns/locale';
import { format } from 'date-fns';
import axios from 'axios';
import './Home.css';
import Badge from 'react-bootstrap/Badge';

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

    const checkerRoom = (event) => {
        const { value } = event.target;
        if (value.length === 3) {
            const room = roomNumber.find((data) => data.room_number == value)?.id;
            room && handlerchange(room);
        }
        else setReportList([]);
    }

    const handlerchange = async (value) => {
        // const { value } = event.target;
        await axios.get(`${Connects.HOST_NAME}/find-callmiter-list/${value}`)
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
        <>
            {/* <div className='home'> */}
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
                            <input type="text" maxLength={3} className="search" placeholder="เลขห้อง เช่น 001" onChange={checkerRoom} />
                            {/* <InputGroup >
                                <InputGroup.Text id="basic-addon1">
                                    <span style={{ fontSize: "20px" }}>&#x2315;</span>
                                </InputGroup.Text> */}
                            {/* <Form.Select onChange={handlerchange} >
                                <option value="0" >-- เลือกห้อง --</option>
                                {roomNumber.map((data, index) => {
                                    return (
                                        data.status && (
                                            <option key={index} value={data.id}>{data.room_number}</option>
                                        )
                                    );
                                })}
                            </Form.Select> */}
                            {/* </InputGroup> */}
                        </Col>
                    </Row>
                    <br></br>
                    {/* <br></br> */}
                    <div className='home-table-bill '>
                        <table className='ta'>
                            <thead>
                                <tr className='t'>
                                    <th colSpan={4} className='b p' style={{ color: "white" }}><h3>ใบเสร็จ</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportList.length < 1 && (
                                    <>
                                        <tr style={{ height: '20rem' }}>
                                            <td colSpan={4} className="b">
                                                <div className="center-position" style={{ padding: '10px' }}>
                                                    <BsInboxesFill size={200} style={{ opacity: '0.5' }} />
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )}
                                {reportList.map((data, index) => {
                                    return (
                                        <tr className='t' key={index}>
                                            <td className='b'><b>{index + 1}</b> </td>
                                            {0 === index ?
                                                <td className='b'>
                                                    <strong>
                                                        {data.fullname}
                                                    </strong>
                                                </td>
                                                :
                                                <td className="b" ></td>
                                            }
                                            <td className='b'>
                                                <Badge bg="success" >
                                                    {formatDate(data.date_call)}
                                                </Badge>
                                            </td>
                                            <td className='b'>
                                                <img src='/images/pdf.png' alt='ruk' />
                                                <GenReport dataCall={data} info={{ name: data.fullname, last_name: '' }}>
                                                    <Button variant="secondary" size="sm">Download</Button>
                                                </GenReport>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
            <hr className='line3'></hr>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h1>
                    <li className='home-mar'>มาร์โรแทบใช้เทคโนโลยีที่ล้ำสมัย</li>
                </h1>
                {/* <br></br>
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
                <br></br> */}

                {/* <div className='home-vs'> */}
                <div className='container'>
                    {/* <b>
                        <h1 className='home-text-vscode'>Visual Studio Code</h1>
                    </b>
                    <div>
                        <img className='home-img-vs' src="./images/vscore.png" />
                    </div>
                    <p className='home-text-img-text'>
                        VS Code เป็นโปรแกรม Text Editor ที่ใช้ในการแก้ไขและปรับแต่งโค้ด
                        ที่มีประสิทธิภาพสูง รองรับการเปิดใช้งานภาษาอื่น ๆ ในตัวเว็ปไซต์ที่สร้างขึ้น
                        ใช้ภาษา เช่น CSS, HTML, JavaScript และ React
                    </p> */}
                    <div className="description">
                        <h1 className="home-title">Visual Studio Code</h1>
                        <p>
                            VS Code เป็นโปรแกรม Text Editor ที่ใช้ในการแก้ไขและปรับแต่งโค้ด
                            ที่มีประสิทธิภาพสูง รองรับการเปิดใช้งานภาษาอื่น ๆ ในตัวเว็ปไซต์ที่สร้างขึ้น
                            ใช้ภาษา เช่น CSS, HTML, JavaScript และ React
                        </p>
                    </div>
                    <img className="image" src="./images/vscore.png" alt="รูปภาพที่ 2" />
                </div>

            </div>
            {/* <br></br>
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
            <br></br> */}

            <hr></hr>
            <div className='home-backgroud3-ocr'>
                <img src="./images/ocr.png" className='home-ocr' />
                {/* <br></br>
                <br></br>
                <br></br> */}
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

            {/* <div className='home-sql'> */}
            <div className='container'>
                {/* <img src='./images/sql sever.png' alt="" />
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
                    <div className='home-img-sql'>
                    </div>
                    <b><h1 className='home-head-sql'>Microsoft SQL Server</h1></b>
                    <p className='home-bg-text-sql'>
                        นำเสนอฐานข้อมูลที่ซับซ้อนให้ผู้ใช้งานเข้าใจได้ง่าย
                        โดยใช้ Database Engine สร้างตารางเก็บข้อมูล
                        และภาษาในการเขียนด้วย SQL ส่วนที่ทำในเว็บไซต์นี้ขึ้น
                        เพื่อจะเชื่อมต่อฐานข้อมูล SQL Server ให้ python
                        ดึงข้อมูลที่ต้องการใช้งาน
                    </p>
                </div> */}
                <img className="image" src="./images/sql sever.png" alt="รูปภาพที่ 1" />
                <div className="description">
                    <h1 className="home-title">Microsoft SQL Server</h1>
                    <p>
                        นำเสนอฐานข้อมูลที่ซับซ้อนให้ผู้ใช้งานเข้าใจได้ง่าย
                        โดยใช้ Database Engine สร้างตารางเก็บข้อมูล
                        และภาษาในการเขียนด้วย SQL ส่วนที่ทำในเว็บไซต์นี้ขึ้น
                        เพื่อจะเชื่อมต่อฐานข้อมูล SQL Server ให้ python
                        ดึงข้อมูลที่ต้องการใช้งาน
                    </p>
                </div>
            </div>

            {/* <br></br>
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
            <br></br> */}
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
                    <img src='./images/tel.png' alt=""></img>
                    :        086-792-1504
                </p>
                <p className='home-face'>
                    <img src='./images/face.png' alt=""></img>
                    :     LooktaLUCK@hotmail.com
                </p>
                <p className='home-line'>
                    <img src='./images/line1.png' alt=""></img>
                    :   @lookTaPeech
                </p>
                <br></br>
            </div>
            {/* </div > */}

            {/* <div className="container">
                <img className="image" src="./images/sql sever.png" alt="รูปภาพที่ 1" />
                <div className="description">
                    <h2>คำอธิบายรูปภาพที่ 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, tortor ac iaculis dignissim, neque lectus tincidunt nisl, sed viverra odio neque id enim.</p>
                </div>
            </div>

            <div className="container">
                <div className="description">
                    <h2>คำอธิบายรูปภาพที่ 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, tortor ac iaculis dignissim, neque lectus tincidunt nisl, sed viverra odio neque id enim.</p>
                </div>
                <img className="image" src="./images/vscore.png" alt="รูปภาพที่ 2" />
            </div>

            <div className="container">
                <img className="image" src="./images/vscore.png" alt="รูปภาพที่ 3" />
                <div className="description">
                    <h2>คำอธิบายรูปภาพที่ 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, tortor ac iaculis dignissim, neque lectus tincidunt nisl, sed viverra odio neque id enim.</p>
                </div>
            </div> */}
        </>
    );
}

export default Home;