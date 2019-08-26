import React from 'react';

import { CountryCard } from '../CountryCard/CountryCard';

import styles from './CountryGrid.module.scss';

const CountryGrid = ({ data }) => (
  <div className={styles.countryGrid}>
    {
      data.countries.map((country) => 
        <CountryCard country={country}  key={country.alpha3Code}/>
      )
    }
  </div>
);

export default CountryGrid;