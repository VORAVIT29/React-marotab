import { Link } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [values, setValue] = useState({ username: '', password: '' });

    function handleChange(event) {
        const { name, value } = event.target;
        setValue({ ...values, [name]: value });
    }

    function login(event) {
        // console.log(values);
        axios.post('http://localhost:5000/api/check-login', values)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    return (
        <section>
            <div className='card-center'>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={login}>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <input type="user" name='username' required onChange={handleChange} />
                                <label for="">User Name</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" name='password' required onChange={handleChange} />
                                <label for="">Password</label>
                            </div>
                            <div className="forget">
                                {/* <input type="checkbox" />Remember Me   */}
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login