import React from 'react';
import ProductLineItem from "./ProductLineItem";
import "./ProductSummary.scss";

const ProductSummary: React.FC = () => {
    return (
        <div id="Product-Summary">
            <div className="Product-Summary-Header">
                <div className="Product-Summary-Column Code">Code</div>
                <div className="Product-Summary-Column Product">Product</div>
                <div className="Product-Summary-Column Options">Options</div>
                <div className="Product-Summary-Column Quantity">Order Qty</div>
                <div className="Product-Summary-Column Take-Now">Take NowQty</div>
                <div className="Product-Summary-Column Unit-Price">Unit Price</div>
                <div className="Product-Summary-Column Discount">Total Discount</div>
                <div className="Product-Summary-Column Amount">Amount NZD</div>
                <div className="Product-Summary-Column Remove"></div>
            </div>
            <div className="Product-Summary-Body">
                <ProductLineItem />
                <ProductLineItem />
                <ProductLineItem />
                <ProductLineItem />
                <ProductLineItem />
                <ProductLineItem />
                <ProductLineItem />
            </div>
        </div> 
    )
}

export default ProductSummary;