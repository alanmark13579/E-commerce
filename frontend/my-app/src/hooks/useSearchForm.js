import { useState } from 'react';
import { searchProduct } from '../api/searchApi';

const useSearchForm = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
  

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async () => {
        const res  = await searchProduct(query);
        setProducts(res);
    };
    return {
        query,
        products,
        handleQueryChange,
        handleSearch,
    };
}

export default useSearchForm;