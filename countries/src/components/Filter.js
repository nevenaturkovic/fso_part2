import React from "react"

const Filter = ({ searchField, setSearchField }) => {
  const handleFilterField = (event) => {
    setSearchField(event.target.value)
  }
  return (
    <div>
      find countries{" "}
      <input value={searchField} onChange={handleFilterField} />
    </div>
  )
}

export default Filter
