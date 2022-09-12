/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <ToastContainer />
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
                <Footer/>
            </Router>
            
        </>
    );
}

export default App;
