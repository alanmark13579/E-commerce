import React from 'react';
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
  cartButtonStyle
} from './ProductStyle';
import useProductForm from '../../hooks/useProductForm';

const ProductForm = ({ productId, product }) => {
  const {
    mainImage,
    thumbnails,
    handleAddToCart,
    handleThumbnailClick
  } = useProductForm(productId);

  return (
    <div style={containerStyle}>
      <div style={breadcrumbStyle}>Home / {product.category}</div>

      <div style={contentStyle}>
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

        <div style={rightPanel}>
          <div style={textStyle}>Product：{product.name}</div>
          <div style={textStyle}>Price：{product.price}</div>
          <div style={textStyle}>Remain Number：{product.remainNumber}</div>

          <button onClick={handleAddToCart} style={cartButtonStyle}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
