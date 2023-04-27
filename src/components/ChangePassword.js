import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ChangePassword.css';

function ChangePassword() {
    const location = useLocation();
    const [element, setElement] = useState({});

    function submit(event) {
        console.log(element);
        axios.post('http://localhost:5000/change-forget-password', element)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    function changeValue(event) {
        const { name, value } = event.target;
        setElement({ ...element, [name]: value });
    }

    useEffect(() => {
        setElement(location.state);
    }, [location.state]);

    return (
        <>
            <section>
                <div className='form-box'>
                    <form onSubmit={submit}>
                        <h2>Change Password</h2>
                        <div className='inputbox'>
                            <input type='text' required name='username' defaultValue={element.username} />
                            <label>User Name</label>
                        </div>
                        <div className='inputbox'>
                            <input type='password' required name='password' defaultValue={element.password} onChange={changeValue} />
                            <label>Password</label>
                        </div>
                        <div className='inputbox'>
                            <input type='password' required name='new_password' />
                            <label>New Password</label>
                        </div>
                        <button className='btn-change'>Submit</button>
                        <div className="Login">
                            <p>
                                <NavLink to="/Back-End/Login">Back to Login</NavLink>
                            </p>
                        </div>
                    </form>
                </div>
            </section >
        </>
    );
}
export default ChangePassword;