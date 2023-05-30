import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './Forget.css'
import { Connects } from '../../data/Connects';

function Forget() {
    const [values, setValues] = useState({ 'admin_password': '' });
    const [dataResponse, setDataResponse] = useState({});
    const [isRedirect, setIsRedirect] = useState(false);
    const nav = useNavigate();

    function submit(event) {
        // console.log(isRedirect);
        axios.post(`${Connects.HOST_NAME}/findUserPass-byAdminPass`, values)
            .then((response) => {
                const result = response.data
                if (result.status === 'Success') {
                    setDataResponse(result.result)
                    setIsRedirect(true);
                }
                else {
                    alert(result.result);
                    event.preventDefault();
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    function changeValue(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    if (isRedirect)
        return nav("/Back-End/ChangePassword", { state: dataResponse });

    return (
        <section>
            <div className='form-box'>
                <form onSubmit={submit}>
                    <h2 className='head-box'>Forget</h2>
                    <div className='inputbox'>
                        <input type='text' required name='admin_password' onChange={changeValue} />
                        <label>Password Admin</label>
                    </div>
                    <button className='btn-forget'>Submit</button>
                    <div className="Login">
                        <p>
                            <NavLink to="/back-end/login">Back to Login</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default Forget