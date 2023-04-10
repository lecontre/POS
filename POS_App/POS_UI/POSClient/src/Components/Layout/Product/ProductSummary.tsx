import React from 'react';
import "./ProductSummary.scss";
import {FaTimes} from "react-icons/fa";

const ProductSummary: React.FC = () => {
    return (
        <div id="Product-Summary">
            <div className="title-roll">
                <div className="cell">Code</div>
                <div className="cell">Product</div>
                <div className="cell">Options</div>
                <div className="cell">Order Qty</div>
                <div className="cell">Take NowQty</div>
                <div className="cell">Unit Price</div>
                <div className="cell">Total Discount</div>
                <div className="cell">Amount NZD</div>
                <div className="cell"></div>
            </div>
            <div className="row">
                <div className="cell update">1401_Belt</div>
                <div className="cell update">Mesh Belt - Black</div>
                <div className="cell update"></div>
                <div className="cell update number">1</div>
                <div className="cell update number">1</div>
                <div className="cell update money">15.00</div>
                <div className="cell update money">0.00</div>
                <div className="cell money">15.00</div>
                <div className="cell">
                    <FaTimes />
                </div>
            </div>
        </div> 
    )
}

export default ProductSummary;