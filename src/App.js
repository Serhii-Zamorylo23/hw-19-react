import './App.css';
import NewContact from "./Components/NewContact";
import Contacts from "./Components/Contacts";
import { nanoid } from 'nanoid';
import Filter from "./Components/Filter";
import { useState,useEffect } from 'react';
const App=()=>{
  const contactsItem=JSON.parse(localStorage.getItem("Contacts"))||[]
  const [contacts,setContacts]=useState(contactsItem)
  const [filter,setFilter]=useState('')
  const setNewContact=(name,telephone)=>{
    const isDuplicate = contacts.some((contact) => contact.name == name);
    if (isDuplicate) {
      alert("A contact with this name already exists!");
      return;
    }else{
      setContacts([...contacts,{id:nanoid(),name,telephone}])
    }
  }
  const Delete=(id)=>{
    setContacts(contacts.filter((contact)=>contact.id!==id))
  }
  const filterValue=(value)=>{
    setFilter(`${value}`)
    setContacts(contacts.filter((contact)=>contact.name.includes(filter.toLocaleLowerCase())))
  }
  useEffect(()=>{
    localStorage.setItem("Contacts",JSON.stringify(contacts))
  },[contacts])
  return(
      <>
        <h2>Phonebook</h2>
        <NewContact newContact={setNewContact}/>
        <h2>Contacts</h2>
        <Filter filter={filterValue}/>
        <Contacts userInfo={contacts} deleteContact={Delete}/>
      </>
  )
}
export default App