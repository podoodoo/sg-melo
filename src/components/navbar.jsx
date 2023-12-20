import { NavLink } from "react-router-dom"
import useCartStore from "../stores/cartStore"

function Navbar() {
    const { items } = useCartStore()
    const totalItemsInCart = items.reduce(
        (total, item) => total + item.quantity,
        0
    )

    return (
        <nav className='flex flex-col items-center justify-between w-full p-12 sm:flex-row sm:gap-y-4 '>
            <NavLink to='/'>
                <div className='text-3xl font-bold'>MeLo</div>
            </NavLink>
            <div className='space-x-4 text-xl'>
                <NavLink to='/mens'>Mens</NavLink>
                <NavLink to='/womens'>Womens</NavLink>
            </div>
            <NavLink to='/cart'>
                <button className='px-4 py-2 text-xl text-white bg-black'>
                    Cart{totalItemsInCart > 0 && ` (${totalItemsInCart})`}
                </button>
            </NavLink>
        </nav>
    )
}

export default Navbar
