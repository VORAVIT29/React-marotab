import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { Connects } from '../data/Connects';

function Login() {
    const [values, setValue] = useState({ username: '', password: '' });
    const [isRedirect, setIsRedirect] = useState(false);
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setValue({ ...values, [name]: value });
    }

    function login(event) {
        // console.log(values);
        axios.post(`${Connects.HOST_NAME}/check-login`, values)
            .then((response) => {
                const result = response.data.message
                if (Number(result) > 0)
                    setIsRedirect(true);
            })
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    if (isRedirect) {
        // Redirect to route
        return navigate("/Back-End/Main");
    }

    return (
        <>
            <section>
                <div className='card-center'>
                    <div className="form-box">
                        < div className="form-value" >
                            <form onSubmit={login}>
                                <h2 className='head-box'>Login</h2>
                                <div className="inputbox">
                                    <input type="user" name='username' required onChange={handleChange} />
                                    <label for="">User Name</label>
                                </div>
                                <div className="inputbox">
                                    <input type="password" name='password' required onChange={handleChange} />
                                    <label for="">Password</label>
                                </div>
                                <div className="forget">
                                    <p>
                                        <Link to="/Back-End/forget">Forget Password</Link>
                                    </p>

                                </div>
                                <button className='btn-submit'>Log in</button>
                                <div className="register">
                                    <p>
                                        Don't have a account <Link to="/Back-End/register">Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div >
                    </div >
                </div >
            </section >
        </>
    );
}

export default Login