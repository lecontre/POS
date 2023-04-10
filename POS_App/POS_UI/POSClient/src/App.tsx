import React, { useState } from 'react';
import MainNavigation from "./Components/Layout/Navigation/MainNavigation";
import PaymentSummary from "./Components/Layout/Payment/PaymentSummary";
import CustomerDetails from "./Components/Layout/Customer/CustomerDetails";
import ProductSummary from "./Components/Layout/Product/ProductSummary";

import './App.scss';




const App: React.FC = () => {

  return (
      <div id="POS-Home">
          <MainNavigation />
          <div className="POS-Component-Layout">
              <div className="POS-Component-Layout-Left">
                  <PaymentSummary />
                  <CustomerDetails />
              </div>
              <div className="POS-Component-Layout-Right">
                  <ProductSummary />
              </div>
          </div>
      </div>
  );
}

export default App;