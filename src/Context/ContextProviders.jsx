import { CatalogCategoriesProvider } from './CatalogCategoriesContext' 
import { CatalogItemsProvider } from './CatalogContext';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';

export const ContextProviders = ({ children }) => (
  <CatalogCategoriesProvider>
    <ProductProvider>
      <CatalogItemsProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </CatalogItemsProvider>
    </ProductProvider>
  </CatalogCategoriesProvider>
);


