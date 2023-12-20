import { useState, useEffect } from "react"

function useFakeStoreApi(category = "") {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = category
                    ? `https://fakestoreapi.com/products/category/${category}`
                    : "https://fakestoreapi.com/products"

                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error("Failed to fetch data")
                }

                const data = await response.json()
                setProducts(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [category])

    return { products, loading, error }
}

export default useFakeStoreApi
