import { BsFillFileEarmarkPdfFill, BsSave, BsPlusSlashMinus, BsFillPencilFill } from "react-icons/bs";
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { DataCalculateUnit } from '../data/DataCalculateUnit';
import interFaceTenantRoom from '../data/DataTenantRoom';
import { Connects } from '../data/Connects';
import { useEffect, useState } from 'react';
import { ToastAlert } from './ToastAlert';
import SpinerLoad from './SpinerLoad';
import NavBar from './NavBar';
import axios from 'axios';
import "./CallMiter.css";
import { format } from 'date-fns';

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

        setShowLoad(false)

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
                // console.log(response.data);
                if (state.toLowerCase() === 'success') {
                    // setData(result);
                    result_ = result;
                    status = 'success';
                }
                else if (state.toLowerCase() === 'empty') {
                    setDetailToast({ status: 'Danger', result: 'Data Empty' });
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
        // console.log(Data);
        const unit_use = Data.unit_present - Data.unit_before;
        const electricityBillTotal = unit_use * Data.electricity_rate;
        const total = (Number(electricityBillTotal.toFixed(1)) + Number(Data.room_rental) + Number(Data.Other));

        setData({ ...Data, 'unit_used': Number(unit_use.toFixed(1)), 'Total': total.toFixed(1), 'electricity_bill': Number(electricityBillTotal.toFixed(1)) });
    }

    const save = (event) => {
        setShowLoad(true);

        // set Date Defalut current
        Data.date_call = format(new Date(), "yyyy-MM-dd");
        const data = { target: JSON.stringify(Data), table: 'calculate_unit' };
        axios.post(`${Connects.HOST_NAME}/insert-data`, data)
            .then((response) => {
                // console.log(response.data);
                // const result = response.data.result;
                const status = response.data.status;
                if (status.toLowerCase() === 'success') {
                    setDetailToast({ status: status, result: ' Save Record' });
                    setShowAlert(true);

                    // setData(result);
                }
            })
            .catch((err) => {
                // console.error(err);
                setDetailToast({ status: 'Danger', result: err });
                setShowAlert(true);
            })
            .finally(() => setShowLoad(false));

        event.preventDefault();
    }

    const update = () => {
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

    useEffect(() => {
        setTimeout(() => {
            setShowLoad(false);
            getAPi();
        }, timeDelay);
    }, []);

    return (
        <>
            <NavBar name="กรุณาใส่ค่าที่คุณต้องการคำนวณ" />
            <SpinerLoad showLoad={showLoad} />

            <ToastAlert alert={ShowAlert} toast={detailToast} close={() => setShowAlert(false)} />

            <div className='call-miter-bg-img'>
                <Container >
                    <Form onSubmit={save}>
                        <Row md={6}>
                            <Col>
                                <Form.Select aria-label="Default select example" name='room_number'
                                    className='position-grid' onChange={handleChangeData} required>
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
                            {DataTen.id > 0 && (
                                <Col md={6}>
                                    <div className='callmiter-name' style={{ textAlign: 'center' }}>
                                        <Form.Label className='position-grid-label'> ชื่อ-สกุล : {DataTen.name} {DataTen.last_name} </Form.Label>
                                    </div>
                                </Col>
                            )}
                        </Row>
                        <Row className="mb-5">
                            <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01" >
                                <Form.Label className='callmiter'>Electricity Bill</Form.Label>
                            </Form.Group>
                            <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom01" >
                                <Form.Label>Unit Present</Form.Label>
                                <Form.Control type='number' name='unit_present' value={Data.unit_present} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom01" >
                                <Form.Label>Unit Before</Form.Label>
                                <Form.Control type='number' name='unit_before' value={Data.unit_before} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02" >
                                <Form.Label>Units used</Form.Label>
                                <Form.Control disabled name='unit_used' value={Data.unit_used} />
                            </Form.Group>
                            <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02" >
                                <Form.Label>Electric rate</Form.Label>
                                <Form.Control type='number' name='electricity_rate' value={Data.electricity_rate} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className='callmiter-Unit-total' as={Col} md="2" controlId="validationCustom02" >
                                <Form.Label>(Batch)</Form.Label>
                                <Form.Control disabled type='number' value={Data.electricity_bill} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-5">
                            <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                                <Form.Label className='callmiter'>Room rental</Form.Label>
                            </Form.Group>
                            <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                                <Form.Label>(Batch)</Form.Label>
                                <Form.Control type='number' name='room_rental' value={Data.room_rental} onChange={handleChange} required />
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
                                <Form.Control disabled value={Data.room_rental} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-5">
                            <Form.Group className='callmite-head' as={Col} md="2" controlId="validationCustom01">
                                <Form.Label className='callmiter'>Other</Form.Label>
                            </Form.Group>
                            <Form.Group className='callmiter-Unit-rental' as={Col} md="2" controlId="validationCustom01">
                                <Form.Label>(Batch)</Form.Label>
                                <Form.Control type='number' name='Other' value={Data.Other} onChange={handleChange} required />
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
                                <Form.Control disabled value={Data.Other} />
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
                                <Form.Control disabled value={Data.Total} />
                            </Form.Group>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row md={12}>

                            <Col md={12} style={{ margin: '1rem' }}>
                                <Button variant="danger" style={{ marginRight: '10px' }}><BsFillFileEarmarkPdfFill /></Button>
                                {/* PDF */}
                                <Button variant="dark" style={{ marginRight: '10px' }} onClick={callProcess} ><BsPlusSlashMinus /></Button>
                                {/* Calculate */}
                                <Button type='submit' variant="secondary" style={{ marginRight: '10px' }}><BsSave /> &nbsp; Save</Button>
                                <Button type='button' variant="secondary" style={{ marginRight: '10px' }} onClick={update}><BsFillPencilFill /> &nbsp; Edit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div >
        </>
    );
}
export default CallMiter;