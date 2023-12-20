import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Shop from "./pages/shop"
import Cart from "./pages/cart"
import Mens from "./pages/shop/Mens"
import Womens from "./pages/shop/Womens"

function App() {
    return (
        <div className='container min-h-screen'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/mens' element={<Mens />} />
                    <Route path='/womens' element={<Womens />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
