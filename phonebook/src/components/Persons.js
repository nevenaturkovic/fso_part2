import React from "react" 

const Persons = ({ persons, searchField }) => {
    return (
        <div>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(searchField.toLowerCase())
          )
          .map((person) => (
            <div key={person.name}>
              {person.name} {person.number}
            </div>
          ))}
      </div>
    )
}

export default Persons