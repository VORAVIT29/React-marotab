import { Link, useNavigate } from 'react-router-dom';
import { Connects } from '../../data/Connects';
import { useState } from 'react';
import axios from 'axios';
import './Login.css'
import Cookies from 'js-cookie';
import { CheckCookies } from '../CookiesLogin/CheckCookies';
import { BsExclamationCircle } from 'react-icons/bs';
import SpinerLoad from '../SpinerLoadPage/SpinerLoad';
import { Spinner } from 'react-bootstrap';

function Login() {
    const [values, setValue] = useState({ username: '', password: '' });
    const [isRedirect, setIsRedirect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [spinerLoad, setSpinerLoad] = useState(false);
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setValue({ ...values, [name]: value });
    }

    function login(event) {
        setSpinerLoad(true);
        axios.post(`${Connects.HOST_NAME}/check-login`, values)
            .then((response) => {
                const status = response.data.status;
                const result = response.data.result;
                if (status.toLowerCase() === 'success') {
                    setIsRedirect(true);

                    // set cookies
                    const json = { 'status': status, 'id': result };
                    Cookies.set('Login', JSON.stringify(json), { expires: 7 });
                }
                else {
                    setIncorrect(true);
                    setTimeout(() => { setIncorrect(false) }, 10000);
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setSpinerLoad(false)
            });

        event.preventDefault();
    }

    if (isRedirect) {
        // Redirect to route
        setTimeout(() => {
            return navigate("/Back-End/Main");
        }, 800);
    }

    return (
        <>
            <CheckCookies />

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
                                        <Link to="/back-end/forget">Forget Password</Link>
                                    </p>
                                </div>
                                {incorrect && (
                                    <div className='incorrect'>
                                        <BsExclamationCircle />&nbsp;<strong>Username or Password is incorrect!</strong>
                                    </div>
                                )}
                                <button className='btn-submit'>
                                    {spinerLoad ?
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        :
                                        'Log in'
                                    }


                                </button>
                                <div className="register">
                                    <p>
                                        Don't have a account <Link to="/back-end/register">Register</Link>
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