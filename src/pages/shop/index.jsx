import ItemCard from "../../components/ItemCard"
import useFakeStoreApi from "../../hooks/useFakeStoreApi"

function Shop() {
    const { products, loading, error } = useFakeStoreApi("")

    return (
        <>
            {loading && <div className='w-full mx-auto'>Loading...</div>}
            <div className='grid grid-cols-1 gap-2 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
                {products.map((product) => (
                    <ItemCard key={product.id} item={product} />
                ))}
            </div>
        </>
    )
}

export default Shop
