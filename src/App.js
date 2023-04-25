// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Forget from './components/Forget';
// import CallPage from './components/CalPage';
// import Home from './components/Home';
import Main from './components/Main';
import CallMiter from './components/CallMiter';


function App() {
    return (
        // Router
        <BrowserRouter>
            <Routes>
                {/* Font End */}
                {/* <Route path='/' exact element={<Home />} /> */}
                <Route path='/' exact element={<Main />} />
                <Route path='/Call' exact element={<CallMiter />} />

                {/* Back End */}
                <Route path='/Back-End/Login' exact element={<Login />} />
                <Route path='/Back-End/Register' exact element={<Register />} />
                <Route path='/Back-End/Forget' exact element={<Forget />} />

                {/* test Route */}
                {/* <Route path='/CallPage' exact element={<CallPage />} /> */}

                {/* Error 404 */}
                {/* <Route path='*' /> */}
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
