import React, { createContext, useState, useEffect, useContext } from 'react';

const CatalogCategoriesContext = createContext();

export const useCatalogCategories = () => {
    return useContext(CatalogCategoriesContext);
};

export const CatalogCategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:7070/api/categories');
            const data = await response.json();
            setCategories(data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CatalogCategoriesContext.Provider value={{ categories, loading }}>
            {children}
        </CatalogCategoriesContext.Provider>
    );
};
