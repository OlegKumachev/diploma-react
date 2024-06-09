import React, { createContext, useState, useEffect, useContext } from 'react';

const CatalogContext = createContext();

export const useCatalog = () => {
    return useContext(CatalogContext);
};

export const CatalogProvider = ({ children }) => {
    const [catalogs, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:7071/api/items/');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                console.log(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    
    useEffect(() => {

    }, [catalogs]);

    return (
        <CatalogContext.Provider value={{ catalogs, loading, error }}>
            {children}
        </CatalogContext.Provider>
    );
};
