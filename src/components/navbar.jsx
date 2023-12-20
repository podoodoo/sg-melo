import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className='flex items-center justify-between w-full p-12 text-3xl'>
            <NavLink to='/'>
                <div className='font-bold'>MeLo</div>
            </NavLink>
            <div className='space-x-4 text-xl'>
                <NavLink to='/mens'>Mens</NavLink>
                <NavLink to='/womens'>Womens</NavLink>
            </div>
            <NavLink to='/cart'>
                <button className='px-4 py-2 text-white bg-black'>Cart</button>
            </NavLink>
        </nav>
    )
}

export default Navbar
