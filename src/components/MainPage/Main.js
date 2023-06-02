import TenantRoom from '../TenantRoomPage/TenantRoom';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../NavBarPage/NavBar';
import './Main.css'
import { useState } from 'react';
import { CheckCookies } from '../CookiesLogin/CheckCookies';

function Main() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <CheckCookies />

            <NavBar name={{ 'th': 'หน้าเจ้าของหอพัก', 'eng': 'Main' }} />

            <div className='grid-container'>
                <div className="square" id='tenant-room' onClick={() => handleShow(true)}>
                    <div className='position-center'>
                        {sessionStorage.getItem('languageENG') === 'true' ? 'Tenant information' : 'ข้อมูลผู้เช่า'}
                    </div>
                </div>
                <NavLink end to="/Back-End/Camera" className="square" id='camara'>
                    <div className='position-center'>
                        {sessionStorage.getItem('languageENG') === 'true' ? 'Camera' : 'กล้องถ่ายรูป'}
                    </div>
                </NavLink>
                <NavLink end to="/Back-End/Call" className="square" id="call">
                    <div className='position-center'>
                        {sessionStorage.getItem('languageENG') === 'true' ? 'Calculate' : 'คำนวณ'}
                    </div>
                </NavLink>
            </div>


            {/* เปิดหน้าใหม่ข้อมูลผู้เช่า */}
            <TenantRoom show={show} fullscreen={fullscreen} onHide={() => setShow(false)} />
        </>
    );
}

export default Main;