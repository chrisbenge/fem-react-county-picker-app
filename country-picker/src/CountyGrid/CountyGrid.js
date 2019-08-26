import React from 'react';
import { Link } from "react-router-dom";

const CountryGrid = ({ data }) => (
  <div className="App">
        {
          data.countries.map((country) => 
            <Link to={{
              pathname: `/country/${country.alpha3Code.toString().toLowerCase()}`,
              state: {country: country}
              }} key={country.alpha3Code}>
              <img src={country.flag} alt={country.name} />
              {country.name}
            </Link>
          )
        }
      </div>
);

export default CountryGrid;