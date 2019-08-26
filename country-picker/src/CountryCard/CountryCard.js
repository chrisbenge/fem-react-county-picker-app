import React from 'react';
import { Link } from "react-router-dom"; 

import styles from './CountryCard.module.scss';

export const CountryCard = ({ country }) => (
  <div className={styles.countryCard}>
    <Link 
      to={{
        pathname: `/country/${country.alpha3Code.toString().toLowerCase()}`,
        state: {country: country}
      }} 
    >
      <img src={country.flag} alt={country.name} />
    </Link>
    
    <div className={styles.countryCard__content}>
      <h2 className={styles.countryCard__name}>{country.name}</h2>
      {country.population && 
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      }

      {country.region && 
        <p><strong>Region:</strong> {country.region}</p>
      }

      {country.capital && 
        <p><strong>Capital:</strong> {country.capital}</p>
      }
    </div>
  </div>
);
