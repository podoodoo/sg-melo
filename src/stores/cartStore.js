import { create } from "zustand"

const useCartStore = create((set) => ({
    items: [],
    addToCart: (product) =>
        set((state) => {
            const itemExists = state.items.find(
                (item) => item.id === product.id
            )

            if (itemExists) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
            } else {
                return {
                    items: [...state.items, { ...product, quantity: 1 }]
                }
            }
        }),
    removeFromCart: (productId) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== productId)
        })),
    increaseQuantity: (productId) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        })),
    decreaseQuantity: (productId) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        })),
    clearCart: () => set({ items: [] })
}))

export default useCartStore
