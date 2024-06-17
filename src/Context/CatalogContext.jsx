import React, { createContext, useState, useEffect, useContext } from 'react';

const CatalogItemsContext = createContext();

export const useCatalogItems = () => {
    return useContext(CatalogItemsContext);
};

export const CatalogItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetchItems();
    }, [category]);

    const fetchItems = async (offset = 0) => {
        setLoading(true);
        try {
            const categoryParam = category && category.id ? `&categoryId=${category.id}` : '';
            const response = await fetch(`http://localhost:7070/api/items?offset=${offset}${categoryParam}`);
            const data = await response.json();
            setItems(prevItems => offset === 0 ? data : [...prevItems, ...data]);
            setHasMore(data.length === 6);
        } catch (error) {
            console.error('Ошибка при получении товаров:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CatalogItemsContext.Provider value={{ items, loading, hasMore, fetchItems, setCategory }}>
            {children}
        </CatalogItemsContext.Provider>
    );
};
