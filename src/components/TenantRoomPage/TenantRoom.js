import { Modal, Container, Form, Button, Row, Col } from 'react-bootstrap';
import interFaceTenantRoom from '../../data/DataTenantRoom';
import { useEffect, useState } from 'react';
import { Connects } from '../../data/Connects';
import SpinerLoad from '../SpinerLoadPage/SpinerLoad';
import { format } from 'date-fns';
import axios from 'axios';
import './TenantRoom.css';

function TenantRoom(props) {
    const [roomNumber, setRoomNumber] = useState([]);
    const [tenantRoomValue, setTenantRoomValue] = useState(interFaceTenantRoom);
    const [isHideBtn, setIsHideBtn] = useState(false);
    const [showLoad, setShowLoad] = useState(true);

    function getAPi() {
        axios.get(`${Connects.HOST_NAME}/all-data/status_room`)
            .then((response) => {
                setRoomNumber(response.data);
            })
            .catch((error) => {
                // console.log(error.message);
            })
            .finally((done) => {
                setTimeout(() => {
                    setShowLoad(false);
                }, 800);
            });
    }

    function setValue(event) {
        const { name, value } = event.target;
        setTenantRoomValue({ ...tenantRoomValue, [name]: value });
    }

    function handleCheckboxChange(event) {
        const { name } = event.target;
        setTenantRoomValue({ ...tenantRoomValue, [name]: !tenantRoomValue.status_date });
    }

    function findDataByid(event) {
        setShowLoad(true);
        const { name, value } = event.target;
        axios.get(`${Connects.HOST_NAME}/find-data-tenant-byIdNumber/Tenant_registration/${value}`)
            .then((response) => {
                const data_result = response.data.result[0];
                const status = response.data.status;
                if (status.toLowerCase() === "success") {
                    setIsHideBtn(true);
                    const date_check_in = (data_result.chek_in !== "") ? format(new Date(data_result.chek_in), "yyyy-MM-dd") : "";
                    const data_check_out = (data_result.chek_out !== "") ? format(new Date(data_result.chek_out), "yyyy-MM-dd") : "";
                    setTenantRoomValue({ ...data_result, "chek_in": date_check_in, "chek_out": data_check_out });
                }
                else {
                    setIsHideBtn(false);
                    setTenantRoomValue({ ...interFaceTenantRoom, [name]: value });
                }

            })
            .catch((error) => {
                alert(error.message);
            })
            .finally(() => setShowLoad(false));
    }

    function submit(event) {
        setShowLoad(true);
        const firstkey = Object.keys(tenantRoomValue)[0];
        delete tenantRoomValue[firstkey];
        const data = { target: JSON.stringify(tenantRoomValue), table: "Tenant_registration" };
        axios.post(`${Connects.HOST_NAME}/insert-data`, data)
            .then((response) => {
                // console.log(response.data.status);
            })
            .catch((error) => {
                // console.log(error.message);
            })
            .finally((done) => {
                setTimeout(() => {
                    window.location.reload();
                    setShowLoad(false);
                }, 1000);
            });
        event.preventDefault();
    }

    function edit(event) {
        setShowLoad(true);
        const data = { target: JSON.stringify(tenantRoomValue) };
        axios.post(`${Connects.HOST_NAME}/edit-data-tenantRoom`, data)
            .then((response) => {
                // const status = response.data.status;
                // console.log(response.data);
            })
            .catch((error) => {
                alert(error.message);
            })
            .finally((done) => {
                setTimeout(() => {
                    setShowLoad(false);
                }, 800);
            });
        event.preventDefault();
    }

    function deleteData() {
        setShowLoad(true);
        const data = { target: JSON.stringify(tenantRoomValue) };
        axios.post(`${Connects.HOST_NAME}/delete-tenantRoom`, data)
            .then((response) => {
                // console.log(response.data);
                setTenantRoomValue(interFaceTenantRoom);
                setIsHideBtn(false);
                getAPi();
            })
            .catch((error) => { alert(error.message); })
    }

    useEffect(() => {
        if (props.show) {
            // Set Data Default
            setShowLoad(true);
            getAPi();
            setTenantRoomValue(interFaceTenantRoom);
            setIsHideBtn(false);
        }
    }, [props, interFaceTenantRoom]);

    return (
        <>
            <Modal {...props} >

                <Modal.Header closeButton>
                    <Modal.Title>
                        <img src='/images/icon_wab.png' alt='icon-web' width="50" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='tennant-room-bg-img'>

                    {/* Show Load */}
                    <SpinerLoad showLoad={showLoad} />


                    <center>
                        <h3><strong>
                            <div className='title-box'>
                                <span className='title'>
                                    <u>
                                        {sessionStorage.getItem('languageENG') === 'true' ? 'TENANT INFORMATION' : 'ข้อมูลผู้เช่า'
                                        }
                                    </u>
                                </span>
                            </div>
                        </strong></h3>
                    </center>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Form onSubmit={submit}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateIn">
                                        <p>
                                            <strong>
                                                {/* <strong> &#x2713;</strong> */}
                                                {sessionStorage.getItem('languageENG') === 'true' ? 'Symbol ✓ : This room has already been reserved.'
                                                    : 'สัญลักษณ์ ✓ : มีการจองห้องแล้ว'
                                                }
                                            </strong>
                                        </p>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2" className='w-auto'>
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'Room Number' : 'ห้องเลขที่'}
                                        </Form.Label>
                                        <Col sm="4">
                                            <Form.Select name='room_number' onChange={findDataByid} >
                                                <option value="0" >
                                                    {sessionStorage.getItem('languageENG') === 'true' ? '-- Select Room --' : '-- เลือกห้อง --'}
                                                </option>
                                                {roomNumber.map((dataList, index) => {
                                                    return (
                                                        <option key={index} value={dataList.id} >
                                                            {dataList.room_number}
                                                            &nbsp;&nbsp;&nbsp;&nbsp;{dataList.status ? <>&#x2713;</> : ''}
                                                        </option>
                                                    )
                                                })}
                                            </Form.Select>

                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateIn">
                                        <Form.Label column sm="3" className='w-auto'>
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'Check In Date' : 'วันที่เข้าพัก'}
                                        </Form.Label>
                                        <Col sm="4">
                                            <Form.Control type='date' name='chek_in' value={tenantRoomValue.chek_in} onChange={setValue} required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateOutAndIn">
                                        <Col sm="4">
                                            <Form.Check
                                                type="radio"
                                                label={sessionStorage.getItem('languageENG') === 'true' ? 'Check Out Date' : 'กำหนดวันออก'}
                                                name="status_date"
                                                id="out-radio"
                                                checked={tenantRoomValue.status_date}
                                                onChange={handleCheckboxChange}
                                                style={{ marginBottom: '1rem' }}
                                                required
                                            />
                                            <Form.Control type='date' style={{ marginBottom: '1rem' }} name='chek_out' value={tenantRoomValue.chek_out} onChange={setValue} disabled={!tenantRoomValue.status_date} />
                                        </Col>
                                        <Col sm="4">
                                            <Form.Check
                                                type="radio"
                                                label={sessionStorage.getItem('languageENG') === 'true' ? 'No check Out Date' : 'ไม่มีกำหนดวันออก'}
                                                name="status_date"
                                                id="not-out-radio"
                                                checked={!tenantRoomValue.status_date}
                                                onChange={handleCheckboxChange}
                                                required
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextIDNumber">
                                        <Form.Label column sm="4" className='align-right'>
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'Identification Number' : 'บัตรประชาชน'}
                                        </Form.Label>
                                        <Col sm="7">
                                            <Form.Control placeholder={sessionStorage.getItem('languageENG') === 'true' ? 'Identification Number' : 'บัตรประชาชน'} type='text' maxLength={13} name='id_card_number' value={tenantRoomValue.id_card_number} onChange={setValue} required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                        <Form.Label column sm="4" className='align-right'>
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'First Name' : 'ชื่อ'}
                                        </Form.Label>
                                        <Col sm="7">
                                            <Form.Control placeholder={sessionStorage.getItem('languageENG') === 'true' ? 'First Name' : 'ชื่อ'} type='text' name='name' value={tenantRoomValue.name} onChange={setValue} required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
                                        <Form.Label column sm="4" className='align-right'>
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'Last Name' : 'นามสกุล'}
                                        </Form.Label>
                                        <Col sm="7">
                                            <Form.Control placeholder={sessionStorage.getItem('languageENG') === 'true' ? 'Last Name' : 'นามสกุล'} type='text' name='last_name' value={tenantRoomValue.last_name} onChange={setValue} required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhonNumber">
                                        <Form.Label column sm="4" className='align-right'>
                                            {sessionStorage.getItem('languageENG') === 'true' ? 'Telephone Number' : 'เบอร์โทร'}
                                        </Form.Label>
                                        <Col sm="7">
                                            <Form.Control placeholder={sessionStorage.getItem('languageENG') === 'true' ? 'Telephone Number' : 'เบอร์โทร'} type='text' maxLength={10} name='tel' value={tenantRoomValue.tel} onChange={setValue} required />
                                        </Col>
                                    </Form.Group>
                                    <center>
                                        {/* &#128465; */}
                                        {
                                            isHideBtn ?
                                                <>
                                                    <Button variant="danger" className='btn-pos' onClick={deleteData}>
                                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Delete' : 'ลบ'}
                                                    </Button>
                                                    <Button variant="secondary" className='btn-pos' onClick={edit}>
                                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Edit' : 'แก้ไข'}
                                                    </Button>
                                                </> :
                                                <>
                                                    <Button type='submit' variant="light" className='btn-pos'>
                                                        {sessionStorage.getItem('languageENG') === 'true' ? 'Save' : 'บันทึก'}
                                                    </Button>
                                                </>
                                        }
                                    </center>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <img src='/images/card-icon.png' alt='card-web' width="300" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal >
        </>
    );
}

export default TenantRoom;