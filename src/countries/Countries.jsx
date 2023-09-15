import { useEffect, useState } from "react";
import Country from "./country/Country";


const Countries = () => {
   const [countries, setCountries] = useState([]);
   useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   },[])

   
    return (
        <div className="">
            <h4 className="text-center">All countries here from external component: <span className="text-xl font-bold text-red-500">{countries.length}</span></h4>
       <div className="grid grid-cols-3">
       {
            countries.map(country => <Country
            key={country.cca3}
                 country = {country.name.common}
                 population= {country.population}
                 area = {country.area}
                 flags={country.flags.png}
                 ></Country> )
        }  
       </div>
       
        </div>
    );
};

export default Countries;