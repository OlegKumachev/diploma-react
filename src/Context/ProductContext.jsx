import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => { // Удаляем id из параметров
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Извлекаем id из props.location.pathname
    const id = window.location.pathname.split('/').pop();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:7071/api/items/${id}`); 
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data); 
                console.log(data);
            } catch (error) {
                setError(error);
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
