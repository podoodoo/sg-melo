import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Shop from "./pages/shop"
import Cart from "./pages/cart"

function App() {
    return (
        <div className='container min-h-screen'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
