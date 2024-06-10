import React, { createContext, useState, useEffect, useContext } from 'react';

const CatalogItemsContext = createContext();

export const useCatalogItems = () => {
    return useContext(CatalogItemsContext);
};

export const CatalogItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetchItems(0);
    }, []);

    const fetchItems = async (offset = 0) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:7071/api/items?offset=${offset}`);
            const data = await response.json();
            setItems(prevItems => offset === 0 ? data : [...prevItems, ...data]);
            setHasMore(data.length === 6);
        } catch (error) {
            console.error('Ошибка при получении товаров:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreItems = () => {
        const newOffset = offset + 6;
        setOffset(newOffset);
        fetchItems(newOffset);
    };

    return (
        <CatalogItemsContext.Provider value={{ items, loading, hasMore, loadMoreItems }}>
            {children}
        </CatalogItemsContext.Provider>
    );
};
