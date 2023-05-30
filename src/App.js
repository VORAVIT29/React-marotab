// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import Register from './components/RegisterPage/Register';
import Forget from './components/ForgetPage/Forget';
import Main from './components/MainPage/Main';
import ChangePassword from './components/ChangePasswordPage/ChangePassword';
import CallMiter from './components/CallMiterPage/CallMiter';
import { CameraPage } from './components/CameraPage/CameraPage';
import { Logout } from './components/LogoutPage/Logout';

function App() {
    return (
        <>
            {/* Router */}
            <BrowserRouter>
                <Routes>
                    {/* Font End */}
                    <Route path='/' exact element={<Home />} />

                    {/* Back End */}
                    <Route path='/back-end/main' exact element={<Main />} />
                    <Route path='/back-end/login' exact element={<Login />} />
                    <Route path='/back-end/register' exact element={<Register />} />
                    <Route path='/back-end/forget' exact element={<Forget />} />
                    <Route path='/back-end/changePassword' exact element={<ChangePassword />} />
                    <Route path='/back-end/camera' exact element={<CameraPage />} />
                    <Route path='/back-end/call' exact element={<CallMiter />} />
                    <Route path='/back-end/logout' exact element={<Logout />} />

                    {/* Error 404 */}
                    {/* <Route exact path='*' /> */}
                </Routes>
            </BrowserRouter >
        </>
    );
}

// <div className="App">
//     <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             Learn React
//         </a>
//     </header>
// </div>

export default App;
