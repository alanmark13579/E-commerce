import React from 'react'
import {
  containerStyle,
  breadcrumbStyle,
  contentStyle,
  leftPanel,
  mainImageStyle,
  thumbnailContainer,
  thumbnailStyle,
  rightPanel,
  textStyle,
  quantityControlStyle,
  quantityButtonStyle,
  quantityInputStyle,
  errorStyle,
  cartButtonStyle
} from './ProductStyle';
import useProductForm from '../../hooks/useProductForm'

const ProductForm = ({ productId, product}) => {
  const {
    mainImage,
    thumbnails,
    quantity,
    error,
    handleAddToCart,
    handleThumbnailClick,
    updateQuantity,
    handleChange,
    handleBlur
  } = useProductForm(productId, product.remainNumber)

  return (
    <div style={containerStyle}>
      <div style={breadcrumbStyle}>Home / {product.category}</div>

      <div style={contentStyle}>
        {/* Left side: main image + thumbnails */}
        <div style={leftPanel}>
          <img src={mainImage} alt="Main" style={mainImageStyle} />

          <div style={thumbnailContainer}>
            {thumbnails.map((imageUrl, id) => (
              <img
                key={id}
                src={imageUrl}
                alt={`Thumb ${id}`}
                onClick={() => handleThumbnailClick(id)}
                style={thumbnailStyle}
              />
            ))}
          </div>
        </div>

        {/* Right side: product details */}
        <div style={rightPanel}>
          <div style={textStyle}>Product：{product.name}</div>
          <div style={textStyle}>Price：{product.price}</div>
          <div style={textStyle}>Remain Number：{product.remainNumber}</div>

          <div>
            <div style={textStyle}>Quantity：</div>
            <div style={quantityControlStyle}>
              <button
                type="button"
                onClick={() => updateQuantity(-1)}
                style={quantityButtonStyle}
                disabled={quantity <= 1}
              >
                -
              </button>

              <input
                type="number"
                value={quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                style={quantityInputStyle}
                min={1}
                max={product.remainNumber}
              />

              <button
                type="button"
                onClick={() => updateQuantity(1)}
                style={quantityButtonStyle}
                disabled={quantity >= product.remainNumber}
              >
                +
              </button>
            </div>

            {error && <div style={errorStyle}>{error}</div>}
          </div>

          <button
            onClick={() => handleAddToCart(product.id)}
            style={cartButtonStyle}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
