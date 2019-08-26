import React, { useState, useEffect } from 'react';
import CoutryGrid from '../CountyGrid/CountyGrid';

const Home = () => {
  const [countryData, setCountries ] = useState({countries: []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json());
      setCountries({countries: data}); 
    };
    fetchData();
  }, []);

  return (
    <CoutryGrid data={countryData}/>
  )
};

export default Home;