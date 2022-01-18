import React from "react"

const CountryInfo = ({ searchField, countries }) => {
  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchField.toLowerCase())
  )

  if (filterCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
  if (filterCountries.length > 1) {
    return (
      <div>
        {filterCountries.map((country) => (
          <span key={country.name.common}>
            {country.name.common} <br />
          </span>
        ))}
      </div>
    )
  }
  if (filterCountries.length === 1) {
    const country = filterCountries[0]
    console.log(country)

    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>
          capital {country.capital}
          <br />
          population {country.population}
        </p>
        <h3>languages </h3>
        <ul>
            {Object.values(country.languages).map((language) => 
            <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.png} width="100px" />
      </div>
    )
  }
  return <div></div>
}

export default CountryInfo
