import React from 'react';
import './ProductTile.scss';

const ProductTile: React.FC = () => {
    return (
        <div className="Product-Tile">
            <img className="Product-Tile-Image" src="https://pos.cin7.com/webfiles/JorgesTiendaNZ/webpages/images/628897/1401_Belt_Black_tn.jpg" alt="belt" />
            <span className="Product-Tile-Name">Mesh Belt - Black</span>
            <span className="Product-Tile-Price">$15.00</span>
            <div className="Product-Tile-Summary">
                <div className="Tile-Summary In-Store-Stock">
                    <span className="Summary-Label">In Store:</span>
                    <span className="Summary-Value">3498</span>
                </div>
                <div className="Tile-Summary Other-Store-Stock">
                    <span className="Summary-Label">Other Stores:</span>
                    <span className="Summary-Value">0</span>
                </div>
                <div className="Tile-Summary Product-Code">
                    <span className="Summary-Label">Code:</span>
                    <span className="Summary-Value">1401_Belt</span>
                </div>
            </div>
            <div className="Product-Tile-Info">
                <input className="Info-Button" type="button" value="More Info" />
            </div>
        </div>
    )
}

export default ProductTile;