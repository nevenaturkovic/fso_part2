import React, { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchField, setSearchField] = useState("")
  const [notifications, setNotifications] = useState(null)

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notifications} />

      <Filter searchField={searchField} setSearchField={setSearchField} />

      <h3>add a new</h3>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setNotifications={setNotifications}
      />

      <h3>Numbers</h3>

      <Persons
        persons={persons}
        searchField={searchField}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
