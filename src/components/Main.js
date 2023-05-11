import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { useState } from 'react';
import TenantRoom from './TenantRoom';
import './Main.css'

function Main() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return (
        <>
            <NavBar name="หน้าหลัก" />

            <div className='grid-container'>
                <div className="square" id='tenant-room' onClick={() => handleShow(true)}>
                    <div className='position-center'>
                        ข้อมูลผู้เช่า
                    </div>
                </div>
                <NavLink end to="/Back-End/Camera" className="square" id='camara'>
                    <div className='position-center'>
                        กล้องถ่ายรูป
                    </div>
                </NavLink>
                <NavLink end to="/Back-End/Call" className="square" id="call">
                    <div className='position-center'>
                        คำนวน
                    </div>
                </NavLink>
            </div>

            {/* เปิดหน้าใหม่ข้อมูลผู้เช่า */}
            <TenantRoom show={show} fullscreen={fullscreen} onHide={() => setShow(false)} />
        </>
    );
}

export default Main;