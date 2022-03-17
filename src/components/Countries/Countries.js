import React, { useEffect, useState } from 'react';
import "./Countries.css"
import Country from './Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Available countries {countries.length}</h1>
            {
                countries.map(country => console.log(country))
            }
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.ccn3}
                        country={country}
                    ></Country>)
            }
            </div>

            
        </div>
    );
};

export default Countries;