import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id = window.location.pathname.split('/').pop();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:7070/api/items/${id}`); 
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);           
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]); 
    

    return (
        <ProductContext.Provider value={{ product, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};
