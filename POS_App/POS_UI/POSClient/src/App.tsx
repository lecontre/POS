import React, { useState } from 'react';
import ProductList from "./Components/ProductList";
import './App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description of product 1',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description of product 2',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
  },
  // ... more products
];

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
      <div className="App">
        <h1>React Calculator</h1>
        <div className="calculator">
          <input type="text" readOnly value={input} />
          <input type="text" readOnly value={result} />
          <div className="buttons">
            {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '+', '-', '*', '/'].map((value, index) => (
                <button key={index} value={value} onClick={handleButtonClick}>{value}</button>
            ))}
            <button onClick={clearInput}>C</button>
            <button onClick={calculateResult}>=</button>
          </div>
        </div>
        <h1>Product Catalog</h1>
        <ProductList products={products} />
      </div>
  );
}

export default App;