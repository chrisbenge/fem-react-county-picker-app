import React, { useState, useEffect } from 'react';

function App() {
  const [data, setCountries ] = useState({countries: []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json());
      setCountries({countries: data}); 
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {
        data.countries.map((country) => 
          <div key={country.alpha3Code}>
            <img src={country.flag} alt={country.name} />
            {country.name}
          </div>
        )
      }
    </div>
  );
}

export default App;
