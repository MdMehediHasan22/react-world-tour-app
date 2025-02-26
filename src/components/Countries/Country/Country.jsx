import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false)
    const handlClick = ()=>{
        setVisited(!visited);
    }

    return (
        <div className ={`country ${visited ? 'visited':'non-visited'}`}>
            <h3 style={{color:visited ? 'Purple':'black'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p><b>Population:</b>{population}</p>
            <p><b>Area:</b>{area}</p>
            <p>Code:{cca3}</p>
            <button onClick={ () =>handleVisitedCountry(country)}>Mark visited</button><br />
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flag</button><br />
            <button onClick={handlClick}>{visited?'visited':'Going'}</button>
            {visited?'i have visited':'I will visit'}
        </div>
    );
};

export default Country;