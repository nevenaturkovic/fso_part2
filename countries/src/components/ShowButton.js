import React from "react"
import CountryInfo from "./CountryInfo"

const ShowButton = ({ setSearchField, country }) => {
    const handleClick = () => {   
        setSearchField(country)
    }
  return <button onClick={handleClick}>show</button>
}

export default ShowButton
