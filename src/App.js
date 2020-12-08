import React, { useState } from "react";
import "./styles.css";

var dictionary = {
  LaptopUnder30K: [
    { name: "Lenovo Ideapad S145", rating: "4/5" },
    { name: "Marq Falcon Aerobook", rating: "3.5/5" }
  ],
  Laptopsunder40k: [
    { name: "Acer Aspire 7", rating: "4.5/5" },
    { name: "HP pavilion Gaming", rating: "4/5" }
  ],
  LaptopUnder60K: [
    { name: "Asus tuf a15", rating: "5/5" },
    { name: "MSI GF 63", rating: "4/5" },
    { name: "Acer Nitro 5", rating: "4.5/5" }
  ],
  LaptopUnder90K: [
    { name: "Apple Macbook Air", rating: "5/5" },
    { name: "Dell G5 15 SE", rating: "4.5/5" },
    { name: "Asus ROG Strix G15", rating: "4/5" }
  ]
};

export default function App() {
  var [selectItem, setItem] = useState("LaptopUnder30K");

  function handleClick(techItem) {
    setItem(techItem);
  }

  return (
    <div className="App">
      <h1>💻 Tech Recommendation</h1>
      <p> My recommendation for laptops</p>
      <div>
        {Object.keys(dictionary).map((techItem) => (
          <button
            onClick={() => handleClick(techItem)}
            style={{
              border: "1px solid black",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              margin: "1rem 0.5rem",
              cursor: "pointer"
            }}
          >
            {techItem}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {dictionary[selectItem].map((techs) => (
            <li
              key={techs.name}
              style={{
                listStyle: "none",
                border: "1px solid black",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                padding: "1rem",
                width: "80%"
              }}
            >
              <div> {techs.name} </div>
              <div> {techs.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
