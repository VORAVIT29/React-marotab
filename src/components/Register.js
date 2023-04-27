import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsExclamationCircle } from "react-icons/bs";
import interFaceRegister from '../data/DataRegister';
import axios from "axios";
import './Register.css'


function Register() {
    const [data, setData] = useState(interFaceRegister);

    function handleChange(event) {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    function submit(event) {
        const dataList = { target: JSON.stringify(data), table: 'host' }
        axios.post('http://localhost:5000/insert-login', dataList)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault()
    }

    async function genAdminPass() {
        let num = '';
        for (let index = 0; index < 3; index++)
            num += '' + Math.floor(Math.random() * 10);
        setData({ ...data, 'admin_password': num });
    }

    useEffect(() => {
        genAdminPass();
    }, []);

    return (
        <section>
            <div className='form-box'>
                <form onSubmit={submit}>
                    <h2>Register</h2>
                    <div className="inputbox">
                        <input type="text" name='name_host' required defaultValue={data.name_host} onChange={handleChange} />
                        <label for="">Name</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" name='last_name' required defaultValue={data.last_name} onChange={handleChange} />
                        <label for="">Last Name</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" required name='email' defaultValue={data.email} onChange={handleChange} />
                        <label for="">Email</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" maxLength={10} required name='phone_number' defaultValue={data.phone_number} onChange={handleChange} />
                        <label for="">Telephone</label>
                    </div>
                    <div className="inputbox" style={{ margin: '20px 0' }}>
                        {/* <span className='icon'><BsExclamationCircle /></span> */}
                        <input type="text" required name='admin_password' defaultValue={data.admin_password} maxLength={3} />
                        <label for="">Password Admin</label>
                    </div>
                    <span className='icon'><BsExclamationCircle /> <font size='2'>รหัสนี้มีไว้เพื่อ ตอนลืมรหัสผ่านการุณาจำ</font></span>
                    <div className="inputbox">
                        <input type="text" required name='username' defaultValue={data.username} onChange={handleChange} />
                        <label for="">Username</label>
                    </div>
                    <div className="inputbox">
                        <input type="password" required name='password' defaultValue={data.password} onChange={handleChange} />
                        <label for="">Password</label>
                    </div>
                    <div className="inputbox">
                        <input type="password" required name='confirm_password' />
                        <label for="">Confirm Password</label>
                    </div>
                    <button type='submit' className='btn-register'>Submit</button>
                    <div className="Login">
                        <p>
                            <NavLink to="/Back-End/Login">Back to Login</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default Register