import React from 'react';
import {FaTimes} from "react-icons/fa";

const ProductLineItem: React.FC = () => {
    return (
        <div className="Product-Line-Item">
            <div className="Product-Summary-Column Code">1401_Belt</div>
            <div className="Product-Summary-Column Product">Mesh Belt - Black</div>
            <div className="Product-Summary-Column Options"></div>
            <div className="Product-Summary-Column Quantity">1</div>
            <div className="Product-Summary-Column Take-Now">1</div>
            <div className="Product-Summary-Column Unit-Price">15.00</div>
            <div className="Product-Summary-Column Discount">0.00</div>
            <div className="Product-Summary-Column Amount">15.00</div>
            <div className="Product-Summary-Column Remove">
                <FaTimes />
            </div>
        </div>
    );
}


export default ProductLineItem;