// utils.test.js
import { calculateTotal } from "../utils/utils.js"

describe("calculateTotal", () => {
    it("calculates the total price correctly for items", () => {
        const items = [
            { id: 1, title: "Item 1", price: 10, quantity: 2 },
            { id: 2, title: "Item 2", price: 15, quantity: 3 },
            { id: 3, title: "Item 3", price: 20, quantity: 1 }
        ]

        const result = calculateTotal(items)

        expect(result).toEqual(10 * 2 + 15 * 3 + 20 * 1)
    })

    it("returns 0 for an empty array of items", () => {
        const items = []

        const result = calculateTotal(items)

        expect(result).toEqual(0)
    })

    it("handles items with quantity of 0", () => {
        const items = [
            { id: 1, title: "Item 1", price: 10, quantity: 0 },
            { id: 2, title: "Item 2", price: 15, quantity: 0 }
        ]

        const result = calculateTotal(items)

        expect(result).toEqual(0)
    })
})
