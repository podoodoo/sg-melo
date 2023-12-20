import useCartStore from "../stores/cartStore"
import PropTypes from "prop-types"

function ItemCard({ item }) {
    const { id, title, price, category, description, image } = item
    const { addToCart } = useCartStore()

    return (
        <div className='flex flex-col max-w-sm overflow-hidden shadow-md'>
            <img src={image} alt={title} className='object-cover w-full h-48' />

            <div className='flex flex-col px-6 py-4 grow'>
                <div className='mb-2 text-xl font-bold grow'>{title}</div>
                <div className='flex justify-between'>
                    <p className='text-base text-gray-700'>
                        ${price.toFixed(2)}
                    </p>
                    <button
                        onClick={() => addToCart(item)}
                        className='px-2 py-1 text-white bg-black'
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

// satisfy es-lint warning: 'item' is missing in props validationeslintreact/prop-types
ItemCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
}

export default ItemCard
