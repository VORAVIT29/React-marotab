// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Forget from './components/Forget';
import Home from './components/Home';
import Main from './components/Main';
import CallMiter from './components/CallMiter';
import ChangePassword from './components/ChangePassword';
import { CameraPage } from './components/CameraPage';

function App() {
    return (
        // Router
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

                {/* Error 404 */}
                {/* <Route exact path='*' /> */}
            </Routes>
        </BrowserRouter >
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
