import { NavLink } from "react-router-dom"
import useCartStore from "../stores/cartStore"

function Navbar() {
    const { getTotalItemsInCart } = useCartStore()

    return (
        <nav className='flex flex-col items-center justify-between w-full p-12 mb-4 bg-white sm:grid sm:grid-cols-3 gap-y-4'>
            <NavLink to='/'>
                <div className='text-3xl font-bold'>MeLo</div>
            </NavLink>
            <div className='mx-auto space-x-4 text-xl'>
                <NavLink to='/mens'>Mens</NavLink>
                <NavLink to='/womens'>Womens</NavLink>
            </div>
            <NavLink to='/cart'>
                <button className='float-right px-4 py-2 text-xl text-white bg-black'>
                    Cart
                    {getTotalItemsInCart() > 0 && ` (${getTotalItemsInCart()})`}
                </button>
            </NavLink>
        </nav>
    )
}

export default Navbar
