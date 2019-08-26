import React from 'react'

const CountryDetails = (props) => {
  const country = props.location.state.country;
  return (
    <p>{country.name}</p>
  );
}

export default CountryDetails;