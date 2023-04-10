import React from "react";
import "./CustomerDetails.scss";

const CustomerDetails: React.FC = () => {
    return (
      <div id="Customer-Details">
          <div className="Customer-Search-Actions">
              <input type="text" className="Customer-Search-Input" placeholder="Search Customer..." />
              <input className="Customer-Action-Button" type="button" value="New" />
              <input className="Customer-Action-Button" type="button" value="CRM" />
              <input className="Customer-Action-Button" type="button" value="Hide Comments" />
          </div>
          <div className="Customer-Search-Details">
              <div className="Customer-Details-Item">
                  <span className="Customer-Item-Label">Company:</span>
                  <span className="Customer-Item-Quantity">Billabong</span>
              </div>
              <div className="Customer-Details-Item">
                  <span className="Customer-Item-Label">First Name:</span>
                  <span className="Customer-Item-Quantity">Jonas</span>
              </div>
              <div className="Customer-Details-Item">
                  <span className="Customer-Item-Label">Last Name:</span>
                  <span className="Customer-Item-Quantity">Smith</span>
              </div>
              <div className="Customer-Details-Item">
                  <span className="Customer-Item-Label">Email:</span>
                  <span className="Customer-Item-Quantity">jonas.smith@billabong.co.nz</span>
              </div>
              <div className="Customer-Details-Item">
                  <span className="Customer-Item-Label">Pricing Tier:</span>
                  <span className="Customer-Item-Quantity">Retail</span>
              </div>
          </div>
          <div className="Customer-Search-Actions">
              <input className="Customer-Action-Button Product-Sale-History" type="button" value="View Product Sales History" />
          </div>
          <div className="Customer-Comments">
              <div className="Customer-Comments-Item">
                  <span className="Customer-Comments-Label">Receipt Comments:</span>
                  <span className="Customer-Comments-Quantity">
                      <textarea></textarea>
                  </span>
              </div>
              <div className="Customer-Comments-Item">
                  <span className="Customer-Comments-Label">Internal Comments:</span>
                  <span className="Customer-Comments-Quantity">
                      <textarea></textarea>
                  </span>
              </div>
          </div>
      </div>  
    );
}

export default CustomerDetails;