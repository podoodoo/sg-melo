import useCartStore from "../../stores/cartStore"
import CartItemCard from "./CartItemCard"

function Cart() {
    const { items } = useCartStore()

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return (
        <div className='container mx-auto mt-8'>
            <h2 className='mx-auto mb-4 text-2xl text-center'>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {items.map((item) => (
                        <CartItemCard key={item.id} item={item} />
                    ))}
                    <div className='flex justify-end mt-4'>
                        <p className='px-4 text-xl font-semibold'>
                            Total: ${total.toFixed(2)}
                        </p>
                    </div>
                    <div className='flex justify-end mt-4'>
                        <button className='px-4 py-2 text-white bg-black'>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
