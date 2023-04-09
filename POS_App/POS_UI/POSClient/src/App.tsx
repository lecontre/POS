import React, { useState } from 'react';
import MainNavigation from "./Components/Layout/Navigation/MainNavigation";
import PaymentSummary from "./Components/Layout/Payment/PaymentSummary";

import './App.scss';



const App: React.FC = () => {

  return (
      <div id="POS-Home">
          <MainNavigation />
          <div className="POS-Component-Layout">
              <PaymentSummary />
          </div>
      </div>
  );
}

export default App;