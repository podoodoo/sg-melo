import useCartStore from "../../stores/cartStore"
import PropTypes from "prop-types"

const CartItemCard = ({ item }) => {
    const { id, title, price, category, description, image, quantity } = item
    const { removeFromCart, increaseQuantity, decreaseQuantity } =
        useCartStore()

    return (
        <div className='flex p-4 mb-4 border border-gray-300'>
            <img
                src={image}
                alt={title}
                className='object-cover w-16 h-16 mr-4'
            />
            <div className='flex flex-col'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <p className='text-gray-600'>{category}</p>
                <p className='mt-2 text-sm'>${price.toFixed(2)}</p>
                <div className='flex items-center mt-2'>
                    <button
                        onClick={() => decreaseQuantity(id)}
                        className='px-2 text-gray-700 bg-gray-200'
                    >
                        -
                    </button>
                    <span className='mx-2'>{quantity}</span>
                    <button
                        onClick={() => increaseQuantity(id)}
                        className='px-2 text-gray-700 bg-gray-200'
                    >
                        +
                    </button>
                    <button
                        onClick={() => removeFromCart(id)}
                        className='px-2 py-1 ml-2 text-white bg-red-500'
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

CartItemCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
}

export default CartItemCard
