import { useEffect, useState } from "react"
import { getCart, updateCart} from "../api/cartApi"

const useCartForm = () => {
    const [cartItems, setCartItems] = useState([])
    const [handleSubmit] = useState(null)

    useEffect(() => {
        const fetchCart = async () => {
          try {
            const items = await getCart()
            // Let every product have unique error msg
            const itemsWithError = items.map(item => ({
              ...item,
              error: ""
            }));
            setCartItems(itemsWithError)

          } catch (err) {
            console.error(err.message)
          }
        }
        fetchCart()
      }, [])

    const validateAndUpdate = (newQuantity, index) => {
      setCartItems(prevItems => {
        const newItems = [...prevItems]
        const remainNumber = newItems[index].remainNumber
    
        newItems[index].quantity = newQuantity
        
        if (newQuantity < 1) {
          newItems[index].error = "Quantity cannot be less than 1"
        } else if (newQuantity > remainNumber) {
          newItems[index].error = `You can only purchase up to ${remainNumber}`
        } else {
          newItems[index].error = ""
    
          const itemToUpdate = [{
            productId: newItems[index].productId,
            quantity: newQuantity,
          }]
          updateCart(itemToUpdate)
        }
    
        return newItems
      })
    }

    const handleChange = (e, index) => {
      const value = e.target.value
      setCartItems(prevItems => {
        const newItems = [...prevItems]
        newItems[index].quantity = value
        return newItems
      })
    }
    
    const handleBlur = (index) => {
      const value = Number(cartItems[index].quantity)
      validateAndUpdate(value, index)
    }


    const handleDelete = async (prodcuctId) => {
        const itemToUpdate = [{
            productId:prodcuctId,
            quantity: 0,
        }]

        updateCart(itemToUpdate)
    }

    const getTotal = () => {
      return cartItems.reduce((sum, item) => {
        if (!item.error) {
          return sum + item.price * item.quantity;
        }
        return sum;
      }, 0);
    };

    return {
        cartItems,
        handleSubmit,
        validateAndUpdate,
        handleChange,
        handleBlur,
        getTotal,
        handleDelete,
    }
}

export default useCartForm
