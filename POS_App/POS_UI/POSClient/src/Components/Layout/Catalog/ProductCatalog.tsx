import React from 'react';
import ProductTile from "./ProductTile";

import './ProductCatalog.scss';

const ProductCatalog: React.FC = () => {
    return (
        <div id="Product-Catalog">
            <div className="Product-Catalog-Search">
                <input id="Catalog-Search-Scanner" type="text" placeholder="Search or scan item..." />
            </div>
            <div className="Product-Catalog-Section">
                <ProductTile />
                <ProductTile />
                <ProductTile />
                <ProductTile />
            </div>
        </div>
    );
}

export default ProductCatalog;