import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name,flags,capital,area,population } = props.country;
    return (
        <div className="country">
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Capital : {capital}</h3>
            <p><small>Area: {area}</small></p>
            <h3><small>Population: {population}</small></h3>
        </div>
    );
};

export default Country;