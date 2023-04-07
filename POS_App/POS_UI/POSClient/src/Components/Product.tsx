// src/components/Product.tsx
import React from 'react';

interface ProductProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
        </div>
    );
};

export default Product;