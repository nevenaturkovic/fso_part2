import React from "react"
import Notification from "../components/Notification"
import personService from "../services/persons"

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setNotifications,
}) => {
  const addNewPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find((person) => person.name === newName)
    console.log(existingPerson)

    if (existingPerson) {
      console.log("existing")
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      if (result) {
        personService
          .update(existingPerson.id, { ...existingPerson, number: newNumber })
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            )
            setNotifications({
              message: `Added '${returnedPerson.name}'`,
              kind: "info",
            })
            setTimeout(() => {
              setNotifications(null)
            }, 5000)
          })
          .catch((error) => {
            setNotifications({
              message: error.response.data.error,
              kind: "error",
            })
          })
      }
    } else {
      console.log("new person")

      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")
          setNotifications({
            message: `Added '${returnedPerson.name}'`,
            kind: "info",
          })
          setTimeout(() => {
            setNotifications(null)
          }, 5000)
        })
        .catch((error) => {
          // this is the way to access the error message
          console.log(error)
          console.log(error.response.data)
          setNotifications({
            message: error.response.data.error,
            kind: "error",
          })
        })
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addNewPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
