import { NavLink } from 'react-router-dom';
import './Forget.css'

function Forget() {
    return (
        <section>
            <div className='form-box'>
                <form action=''>
                    <h2>Forget</h2>
                    <div className='inputbox'>
                        <input type='password' required />
                        <label>Password Admin</label>
                    </div>
                    <div className='inputbox'>
                        <input type='text' required />
                        <label>User Name</label>
                    </div>
                    <div className='inputbox'>
                        <input type='text' required />
                        <label>Password</label>
                    </div>
                    <button>Submit</button>
                    <div className='change-password'>
                        <p>
                            <NavLink to="/Back-End/Change-Password">Change Password</NavLink>
                        </p>
                    </div>
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

export default Forget