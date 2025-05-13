import React, { useState } from "react";
import "./../styles/App.css";

let data = [
  {
    id: 1,
    item: "Apple",
    price: 20,
  },
  {
    id: 2,
    item: "Banana",
    price: 10,
  },
  {
    id: 3,
    item: "Neutella",
    price: 30,
  },
  {
    id: 4,
    item: "Razor",
    price: 5,
  },
  {
    id: 5,
    item: "CornFlakes",
    price: 15,
  },
  {
    id: 6,
    item: "Sound Bar",
    price: 50,
  },
  {
    id: 7,
    item: "Iphone",
    price: 80,
  },
];
const App = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <h3>Enter your budget to check available items:</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Items you can buy are in Green color</h3>
      <table>
        {data.map((product) => (
          <tr key={product.id}>
            <td>{product.item}</td>
            <td
              style={{
                color: product.price <= Number(input) ? "green" : "red",
              }}
            >
              {product.price}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
