import React from "react";
import "./PaymentSummary.scss";

const PaymentSummary: React.FC = () => {
    return (
        <div id="Payment-Summary">
            <div className="Payment-Summary-List">
                <div className="Payment-Summary-Item">
                    <span className="Summary-Item-Label">Sub Total:</span>
                    <span className="Summary-Item-Quantity">15.00</span>
                </div>
                <div className="Payment-Summary-Item">
                    <span className="Summary-Item-Label">Discount:</span>
                    <span className="Summary-Item-Quantity">0.00</span>
                </div>
                <div className="Payment-Summary-Item">
                    <span className="Summary-Item-Label">Freight:</span>
                    <span className="Summary-Item-Quantity">0.00</span>
                </div>
                <div className="Payment-Summary-Item">
                    <span className="Summary-Item-Label">Tax 15%:</span>
                    <span className="Summary-Item-Quantity">0.00</span>
                </div>
                <div className="Payment-Summary-Item">
                    <span className="Summary-Item-Label">Total:</span>
                    <span className="Summary-Item-Quantity">0.00</span>
                </div>
            </div>
            <div className="Payment-Summary-Actions">
                <div className="Summary-Actions-Group Pay-Order">
                    <input className="Summary-Action-Button Payment-Button" type="button" value="$0.00 to PAY" />
                    <input className="Summary-Action-Button Cancel-Button" type="button" value="Cancel Order" />
                </div>
                <div className="Summary-Actions-Group">
                    <input className="Summary-Action-Button" type="button" value="Park Order" />
                    <input className="Summary-Action-Button" type="button" value="Finish Order" />
                </div>
            </div>
        </div>
    );
}

export default PaymentSummary;


