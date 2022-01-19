import React from "react"
import personService from "../services/persons"

const DeleteButton = ({ deletionOfPerson }) => {
  return <button onClick={deletionOfPerson}>delete</button>
}

const Persons = ({ persons, searchField, setPersons }) => {
  const deletePersonOf = (id) => {
    const person = persons.find((n) => n.id === id)

    personService
      .del(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
      .catch(() => {
        alert(`Person '${person.name}' was already deleted from server`)
        setPersons(persons.filter((n) => n.id !== id))
      })
  }

  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchField.toLowerCase())
        )
        .map((person) => (
          <div key={person.name}>
            {person.name} {person.number}
            <DeleteButton deletionOfPerson={() => deletePersonOf(person.id)} />
          </div>
        ))}
    </div>
  )
}

export default Persons
