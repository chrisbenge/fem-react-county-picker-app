import React from 'react'
import styles from './CountryDetail.module.scss';

const CountryDetails = (props) => {
  const country = props.location.state.country;
  const languages = country.languages.length > 0 ? country.languages.map( lang => lang.name) : [];
  const currencies = country.currencies.length > 0 ? country.currencies.map( currency => currency.name) : [];
  const topLevelDomains = country.topLevelDomain.length > 0 ? country.topLevelDomain.map( domain => domain) : [];

  return (
    <article className={styles.countryDetails}>
      <img src={country.flag} alt={country.name} />

      <section className={styles.countryDetails__content}>
        <h2>{country.name}</h2>
        <ul className={styles.countryDetails__list}>
        {country.nativeName && 
          <li><strong>Navtive Name:</strong> {country.nativeName}</li>
        }

        {country.population && 
          <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
        }

        {country.region && 
          <li><strong>Region:</strong> {country.region}</li>
        }

        {country.subregion && 
          <li><strong>Sub Region:</strong> {country.subregion}</li>
        }

        {country.capital && 
          <li><strong>Capital:</strong> {country.capital}</li>
        }

        {topLevelDomains.length > 0 && 
          <li><strong>Top Level Domains:</strong> {topLevelDomains.join()}</li>
        }

        {currencies.length > 0 && 
          <li><strong>Currencies:</strong> {currencies.join()}</li>
        }

        {languages.length > 0 } {
          <li><strong>Languages:</strong> {languages.join(', ')}</li>
        }
      </ul>
      </section>
    </article>
  );
}

export default CountryDetails;