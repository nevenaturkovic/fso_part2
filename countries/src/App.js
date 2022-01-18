import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import CountryInfo from "./components/CountryInfo"

const App = () => {
  const [searchField, setSearchField] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter searchField={searchField} setSearchField={setSearchField} />
      <CountryInfo searchField={searchField} countries={countries} />  
    </div>
  )
}

export default App
