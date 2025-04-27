import { useState } from 'react';
import { searchProduct } from '../api/searchApi';
import { useNavigate } from "react-router-dom";

const useSearchForm = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async () => {
        const res  = await searchProduct(query);
        setProducts(res);
    };

    const handleProductClick = (product) => {
        console.log(product.imageUrl)
        navigate(`/product/${product.id}`, {
            state: product
        });
    };

    return {
        query,
        products,
        handleQueryChange,
        handleSearch,
        handleProductClick
    };
}

export default useSearchForm;