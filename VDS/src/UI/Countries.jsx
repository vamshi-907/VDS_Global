import React, { useState } from "react";
import "./Countries.css";

const continents = [
  "Antarctica", "Asia", "Africa", "Europe", "North America", "Australia", "Zealandia"
];

const countryOrders = {
  "Antarctica": ["France", "Japan", "Germany", "Italy", "Spain", "UK", "USA", "Australia", "Canada", "Ireland", "New Zealand", "Europe"],
  "Asia": ["Japan", "China", "India", "South Korea", "Thailand", "India", "Vietnam", "Malaysia", "Singapore", "Philippines", "Turkey", "Saudi Arabia"],
  "Africa": ["South Africa", "Egypt", "Nigeria", "Kenya", "Morocco", "Ghana", "Ethiopia", "Tanzania", "Algeria", "Uganda", "Sudan", "Tunisia"],
  "Europe": ["UK", "Germany", "France", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland", "Belgium", "Austria", "Norway", "Denmark"],
  "North America": ["USA", "Canada", "Mexico", "Cuba", "Guatemala", "Honduras", "Panama", "Jamaica", "Costa Rica", "El Salvador", "Dominican Republic", "Haiti"],
  "Australia": ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu", "Samoa", "Tonga", "Kiribati", "Tuvalu", "Nauru", "Micronesia"],
  "Zealandia": ["New Zealand", "Australia", "Fiji", "Tonga", "Samoa", "Vanuatu", "New Caledonia", "Cook Islands", "Norfolk Island", "Niue", "Solomon Islands", "Tuvalu"]
};

const flagMap = {
  "Japan": "jp",
  "Turkey": "tr",
  "Tuvalu": "tv",
  "Micronesia": "fm",
  "Spain": "es",
  "UK": "gb",
  "Sudan": "sd",
  "Tunisia": "tn",
  "Tanzania": "tz",
  "Sweden": "se",
  "Switzerland": "ch"
};

const Countries = () => {
  const [selectedContinent, setSelectedContinent] = useState("Europe");
  
  return (
    <div className="destination-section">
      <h2 className="title">Our Destinations</h2>
      <div className="continent-buttons">
        {continents.map((continent) => (
          <button 
            key={continent} 
            className={continent === selectedContinent ? "active" : ""}
            onClick={() => setSelectedContinent(continent)}
          >
            {continent}
          </button>
        ))}
      </div>
      <div className="country-container">
        {countryOrders[selectedContinent].map((country, index) => (
          <div key={index} className="country-card">
            <img src={`https://flagcdn.com/w80/${flagMap[country] || country.slice(0, 2).toLowerCase()}.png`} alt={country} className="flag-icon" />
            <span className="country-name">{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;