import { useEffect, useState } from "react"
import { productDetail } from '../api/productApi'
import { addCart } from "../api/cartApi"

const useProductForm = (productId, remainNumber) => {
  const [thumbnails, setThumbnails] = useState([])
  const [mainImage, setMainImage] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState("")


  useEffect(() => {
    const fetch = async () => {
      if (!productId) return
      const res = await productDetail(productId)
      const thumbUrls = res.map(img => img.imageUrl)
      setThumbnails(thumbUrls)

      const primary = res.find(img => img.isPrimary) || res[0]
      setMainImage(primary?.imageUrl || "")
    }
    fetch()
  }, [productId])

  const handleAddToCart = (Id) => {
    addCart(Id, quantity)
  }

  const handleThumbnailClick = (index) => {
    setMainImage(thumbnails[index])
  }

  const updateQuantity = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = Number(prevQuantity) + change
      return Math.max(1, Math.min(remainNumber, newQuantity))
    })
  }

  const handleChange = (e) => {
    setQuantity(e.target.value)
    setError("")
  }
  
  const handleBlur = () => {
    const numericValue = Number(quantity)
  
    if (quantity === "") {
      setError("Please enter a quantity")
    } else if (isNaN(numericValue)) {
      setError("Please enter a valid number")
    } else if (numericValue < 1) {
      setError("Quantity cannot be less than 1")
    } else if (numericValue > remainNumber) {
      setError(`You can only purchase up to ${remainNumber}`)
    } else {
      setError("")
    }
  }

  return {
    mainImage,
    thumbnails,
    quantity,
    error,
    handleAddToCart,
    handleThumbnailClick,
    updateQuantity,
    handleChange,
    handleBlur
  }
}

export default useProductForm
