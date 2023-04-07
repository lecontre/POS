// src/components/ProductList.tsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Product from './Product';

interface ProductData {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface ProductListProps {
    products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (searchTerm: string) => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="product-list">
            <SearchBar onSearch={handleSearch} />
            <div className="products">
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;