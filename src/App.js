/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import CreateProduct from './views/CreateProduct/CreateProduct';
import Footer from './components/Footer/Footer';
import LandingPage from './views/LandingPage/LandingPage';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/createproduct" element={<CreateProduct />} />
                </Routes>
                <Footer />
            </Router>

        </>
    );
}

export default App;
