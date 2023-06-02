import { BsFillFileEarmarkPdfFill, BsSave, BsPlusSlashMinus, BsFillPencilFill } from "react-icons/bs";
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { DataCalculateUnit } from '../../data/DataCalculateUnit';
import interFaceTenantRoom from '../../data/DataTenantRoom';
import { Connects } from '../../data/Connects';
import { useEffect, useState } from 'react';
import { ToastAlert } from '../Alert/ToastAlert';
import SpinerLoad from '../SpinerLoadPage/SpinerLoad';
import NavBar from '../NavBarPage/NavBar';
import axios from 'axios';
import GenReport from "../PrintReport/GenReport";
import "./CallMiter.css";
import { CheckCookies } from "../CookiesLogin/CheckCookies";
import { format } from "date-fns";
import { th } from "date-fns/locale";

function CallMiter() {
    const [ShowAlert, setShowAlert] = useState(false);
    const [detailToast, setDetailToast] = useState({ 'status': '', 'result': '' });
    const [Data, setData] = useState(DataCalculateUnit);
    const [DataTen, setDataTen] = useState(interFaceTenantRoom);
    const [roomNumber, setRoomNumber] = useState([]);
    const [showLoad, setShowLoad] = useState(true);
    const timeDelay = 800;

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
                }, timeDelay);
            });
    }

    async function handleChangeData(event) {
        const { value, name } = event.target;
        let room_number = 0;
        setShowLoad(true);

        // Search Data TenantRoom
        await axios.get(`${Connects.HOST_NAME}/find-data-tenant-byIdNumber/Tenant_registration/${value}`)
            .then((response) => {
                const result = response.data.result;
                const state = response.data.status;
                // console.log(result);
                if (state.toLowerCase() === 'success') {
                    // console.log(result[0]);
                    setDataTen(result[0]);
                    room_number = result[0].room_number;
                } else if (state.toLowerCase() === 'empty') {
                    setDataTen(interFaceTenantRoom);
                }
            })
            .catch((error) => { console.error(error); });

        const [result, status] = await findDataCallMiter(room_number);

        if (status === 'success')
            setData({ ...result, [name]: value });
        else
            setData({ ...result, [name]: value });

        setTimeout(() => setShowLoad(false), 800);
    }

    async function findDataCallMiter(room_number) {
        let status = '';
        let result_ = '';

        // Clear Data
        setData(DataCalculateUnit);

        await axios.get(`${Connects.HOST_NAME}/find-data-call-miter/${room_number}`)
            .then((response) => {
                const state = response.data.status;
                const result = response.data.result;
                if (state.toLowerCase() === 'success') {
                    // console.table(result);
                    result_ = result;
                    status = 'success';
                }
                else if (state.toLowerCase() === 'empty') {
                    setDetailToast({ status: 'Danger', result: 'ยังไม่มีการสแกน!' });
                    setShowAlert(true);

                    // setData(DataCalculateUnit);
                    result_ = DataCalculateUnit;
                    status = 'empty';
                }
            })
            .catch((err) => {
                setDetailToast({ status: 'Danger', result: err });
                setShowAlert(true);
            })

        return [result_, status];
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...Data, [name]: value });
    }

    const callProcess = () => {
        setShowLoad(true);
        // console.log(Data);
        const unit_use = Data.unit_present - Data.unit_before;
        const electricityBillTotal = unit_use * Data.electricity_rate;
        const total = (Number(electricityBillTotal.toFixed(1)) + Number(Data.room_rental) + Number(Data.Other));

        setData({ ...Data, 'unit_used': Number(unit_use.toFixed(1)), 'Total': total.toFixed(1), 'electricity_bill': Number(electricityBillTotal.toFixed(1)) });

        setTimeout(() => setShowLoad(false), 800);
    }

    // Save
    const save = (event) => {
        setShowLoad(true);

        Data.id = null;
        Data.date_call = format(new Date(), 'yyyy-MM-dd');
        // console.log('Save ', Data);
        const data = { target: JSON.stringify(Data), table: 'calculate_unit' };
        axios.post(`${Connects.HOST_NAME}/insert-data`, data)
            .then((response) => {
                // console.log(response.data);
                const status = response.data.status;
                if (status.toLowerCase() === 'success') {
                    setDetailToast({ status: status, result: ' Save Record' });
                    setShowAlert(true);
                }
            })
            .catch((err) => {
                // console.error(err);
                setDetailToast({ status: 'Danger', result: err });
                setShowAlert(true);
            })
            .finally(() => {
                setShowLoad(false);

                setTimeout(() => {
                    window.location.reload();
                }, 800);
            });

        event.preventDefault();
    }

    // Update
    const update = () => {
        // console.log('update ', Data);
        setShowLoad(true);

        const data = { target: JSON.stringify(Data), table: 'calculate_unit' };
        axios.post(`${Connects.HOST_NAME}/update-data-call`, data)
            .then(response => {
                const status = response.data.status;
                if (status.toLowerCase() === 'success') {
                    setDetailToast({ status: status, result: ' Update Record!' });
                    setShowAlert(true);
                }
            })
            .catch((err) => {
                setDetailToast({ status: 'Danger', result: err });
                setShowAlert(true);
            })
            .finally(() => setShowLoad(false));
    }

    const formatDate = (date) => {
        const dataYear = format(new Date(date), 'd MMM yyyy', { locale: th });
        const year = format(new Date(date), 'yyyy', { locale: th });
        const convertYear = Number(year) + 543;
        return dataYear.replace(year, convertYear.toString());
    }

    useEffect(() => {
        setTimeout(() => {
            getAPi();
        }, timeDelay);
    }, []);

    return (
        <>
            <CheckCookies />

            <NavBar name={{ 'th': "กรุณาใส่ค่าที่คุณต้องการคำนวณ", 'eng': 'Please enter the value you want to calculate.' }} />
            <SpinerLoad showLoad={showLoad} />

            <ToastAlert alert={ShowAlert} toast={detailToast} close={() => setShowAlert(false)} />

            <div className='call-miter-bg-img'>
                <Container>
                    <Form onSubmit={save}>
                        <div className="mb-4">
                            <Row>
                                <Col md={4}>
                                    <div className="callmiter-box mb-3">
                                        <Form.Group as={Row} controlId="room">
                                            <Form.Label column sm="3" style={{ width: 'auto' }}>
                                                {sessionStorage.getItem('languageENG') === 'true' ? 'Room Number' : 'ห้องเลขที่'}
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Select name='room_number' onChange={handleChangeData} >
                                                    <option value="0" >
                                                        {sessionStorage.getItem('languageENG') === 'true' ? '-- Room Number --' : '-- เลือกห้อง --'}
                                                    </option>
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
                                        </Form.Group>
                                    </div>
                                </Col>
                                <Col md={2}></Col>

                                {DataTen.id > 0 && (
                                    <Col md={6}>
                                        <div className="callmiter-box" style={{ background: '#796d6dc4', color: 'white' }}>
                                            <Form.Group as={Row} controlId="name">
                                                <Form.Label column sm="2" className="w-auto">
                                                    {sessionStorage.getItem('languageENG') === 'true' ? 'Name' : 'ชื่อ-สกุล'}
                                                </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control disabled value={DataTen.name + ' ' + DataTen.last_name} />
                                                </Col>
                                                <Form.Label column sm="2" className="w-auto">
                                                    {sessionStorage.getItem('languageENG') === 'true' ? 'Check In Date' : 'วันที่เข้าพัก'}
                                                </Form.Label>
                                                <Col sm="3">
                                                    <Form.Control disabled value={formatDate(DataTen.chek_in)} />
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>

                        <div className="callmiter-box">
                            <Row className="mb-2">
                                <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01" >
                                    <Form.Label className='callmiter'>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Electricity Bill' : 'ค่าไฟ'}
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom01" >
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Unit Present' : 'หน่วยมิเตอร์ปัจจุบัน'}
                                    </Form.Label>
                                    <Form.Control type='number' name='unit_present' value={Data.unit_present} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom01" >
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Unit Before' : 'หน่วยมิเตอร์ก่อนหน้า'}
                                    </Form.Label>
                                    <Form.Control type='number' name='unit_before' value={Data.unit_before} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02" >
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Units used' : 'หน่ยวมิเตอร์ที่ใช้'}
                                    </Form.Label>
                                    <Form.Control disabled name='unit_used' value={Data.unit_used} />
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02" >
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Electric rate' : 'อัตราค่าไฟฟ้า'}
                                    </Form.Label>
                                    <Form.Control type='number' name='electricity_rate' value={Data.electricity_rate} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02" >
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? '(Baht)' : '(บาท)'}
                                    </Form.Label>
                                    <Form.Control disabled type='number' value={Data.electricity_bill} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label className='callmiter'>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Room rental' : 'ค่าเช่าห้อง'}

                                    </Form.Label>
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? '(Baht)' : '(บาท)'}
                                    </Form.Label>
                                    <Form.Control type='number' name='room_rental' value={Data.room_rental} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label></Form.Label>
                                    {/* <Form.Control /> */}
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? '(Baht)' : '(บาท)'}
                                    </Form.Label>
                                    <Form.Control disabled value={Data.room_rental} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label className='callmiter'>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Other' : 'อื่นๆ'}
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? '(Baht)' : '(บาท)'}
                                    </Form.Label>
                                    <Form.Control type='number' name='Other' value={Data.Other} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="6" controlId="">
                                    {/* <Form.Label></Form.Label> */}
                                    {/* <Form.Control /> */}
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? '(Baht)' : '(บาท)'}
                                    </Form.Label>
                                    <Form.Control disabled value={Data.Other} />
                                </Form.Group>
                            </Row>
                            <Row >
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="8" controlId=""></Form.Group>
                                <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label className="callmiter">
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Total' : 'รวม'}
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom02">
                                    <Form.Label>
                                        {sessionStorage.getItem('languageENG') === 'true' ? '(Baht)' : '(บาท)'}
                                    </Form.Label>
                                    <Form.Control disabled value={Data.Total} />
                                </Form.Group>
                            </Row>
                            <br></br>
                            {/* <br></br> */}
                            <Row md={12}>
                                <Col md={12} style={{ margin: '1rem' }}>
                                    <GenReport dataCall={Data} info={DataTen} >
                                        <Button variant="danger" style={{ marginRight: '10px' }}><BsFillFileEarmarkPdfFill /></Button>
                                    </GenReport>
                                    {/* PDF */}
                                    <Button variant="dark" style={{ marginRight: '10px' }} onClick={callProcess} ><BsPlusSlashMinus /></Button>
                                    {/* Calculate */}
                                    {!Data.is_date && (
                                        <Button type='submit' variant="secondary" style={{ marginRight: '10px' }}>
                                            <BsSave /> &nbsp;
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'Save' : 'บันทึก'}
                                        </Button>
                                    )}
                                    {Data.is_date && (
                                        <Button type='button' variant="secondary" style={{ marginRight: '10px' }} onClick={update}>
                                            <BsFillPencilFill /> &nbsp;
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'Edit' : 'แก้ไข'}
                                        </Button>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </Container>
            </div >
        </>
    );
}
export default CallMiter;