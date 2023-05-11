/** ยังไม่ได้ใช้ */
function ChangePass() {
    return (
        <section>
            <div className='form-box'>
                <form action=''>
                    <h2>Chnage Password</h2>
                    <div className='inputbox'>
                        <input type='text' required />
                        <label>New Password</label>
                    </div>
                    <div className='inputbox'>
                        <input type='text' required />
                        <label>Confirm Password</label>
                    </div>
                    <button>Submit</button>
                    <div className='change-password'>
                        <p>
                            {/* <NavLink to="/Back-End/Change-Password">Change Password</NavLink> */}
                        </p>
                    </div>
                    <div className="Login">
                        <p>
                            {/* <NavLink to="/Back-End/Login">Back to Login</NavLink> */}
                        </p>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default ChangePass;