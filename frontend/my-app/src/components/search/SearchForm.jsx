import React from 'react';
import {
    container,
    barContainer,
    searchInputStyle,
    searchButtonStyle,
    productGrid,
    productCard,
    productImage
} from './searchStyle';
import useSearchForm from '../../hooks/useSearchForm';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

const SearchForm = () => {
    const {
        query, 
        products,
        handleQueryChange,
        handleSearch,
        handleProductClick
    } = useSearchForm();
  
    return (
      <div style={container}>
        <div style={barContainer}>
          <TextInput
            value={query}
            onChange={handleQueryChange}
            placeholder="Search products"
            style={searchInputStyle}
          />
          <Button onClick={handleSearch} style={searchButtonStyle}>
            Search
          </Button>
        </div>
        <div style={productGrid}>
          {products.map((product, index) => (
            <div
              key={index}
              style={productCard}
              onClick={() => handleProductClick(product)}
            >
              <img src={product.imageUrl} alt={product.name} style={productImage} />
              <div>{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SearchForm;
  