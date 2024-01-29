
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import './App.css';
import Navbar from './components/Navbar';
import Checkout from './page/Checkout';

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/checkout/:productId' element={<Checkout />} />

            </Routes>


        </BrowserRouter>
    );
}

export default App;