import React from "react"

const Filter = ({ searchField, setSearchField }) => {
  const handleFilterField = (event) => {
    setSearchField(event.target.value)
  }
  return (
    <div>
      filter shown with{" "}
      <input value={searchField} onChange={handleFilterField} />
    </div>
  )
}

export default Filter
