
import { useState } from 'react'
import './App.css'
import Countries from './countries/Countries'
import { useEffect } from 'react';
import Header from './header/Header';
import Country from './countries/country/Country';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <>
    <div>
      <Header></Header>
      <Navbar></Navbar>
    <h1  className="text-center text-red-500 text-2xl font-bold">This is rest countries</h1>
    {/* <LoadCountries></LoadCountries> */}
    <Countries></Countries>
    <Footer></Footer>
    </div>
      
    </>
  )
}

/* function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  return(
    <>
    <h3>Countries length from internal component: {countries.length}</h3>
    </>
  )
} */

export default App
