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
                    <Route path='/Back-End/Main' exact element={<Main />} />
                    <Route path='/Back-End/Login' exact element={<Login />} />
                    <Route path='/Back-End/Register' exact element={<Register />} />
                    <Route path='/Back-End/Forget' exact element={<Forget />} />
                    <Route path='/Back-End/ChangePassword' exact element={<ChangePassword />} />
                    <Route path='/Back-End/Camera' exact element={<CameraPage />} />
                    <Route path='/Back-End/Call' exact element={<CallMiter />} />
                    <Route path='/Back-End/Logout' exact element={<Logout />} />

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
