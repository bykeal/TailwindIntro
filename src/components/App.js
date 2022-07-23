import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
// import {uuid} from 'uuidv4';
import api from '../api/contacts';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  const contactskey = "contacts";
  const [contacts,setContacts] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [SearchResult, setSearchResult] = useState([]);

  // retrieve contacts from api
  const retrievecontactsfromapi = async() => {
    const response = await api.get('/contacts');
    return response.data;
  }

 useEffect(() => {
  // const retrieveContacts = JSON.parse(localStorage.getItem(contactskey));
  const getAllContacts = async() => {
    const retrieveContacts = await retrievecontactsfromapi();
    if (retrieveContacts) setContacts(retrieveContacts);
  }

  getAllContacts();
 
 }, []);
  
  useEffect(() => {
    console.log("from set")
    localStorage.setItem(contactskey, JSON.stringify(contacts));
  },[contacts]);

  const addcontacthandler = async (contact) => {
    const id = contact.email + Math.floor(Math.random() * 1001);
    const request = {
      id: id,
      ...contact
    }

    const response = await api.post('/contacts',request);

    setContacts([...contacts, response.data]);
    
    // setContacts([...contacts, {id: contact.email + Math.floor(Math.random() * 1001), ...contact}]);
  };

  const updatehandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    // console.log(response.data);
    const { id, name , email} = response.data;
    // if contact id is the same, replace the updated element else the former returns
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact;
      })
    )   
  }

  const RemoveContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContact = contacts.filter(
      contact =>  {return contact.id !== id}
    ); //this filters out element that has the id fro the contacts id

    setContacts(newContact);
  }

  const searchhandeler = (term) => {
    // console.log(term);
    setSearchTerm(term);
    if(term !== ""){
      const newcontactlist = contacts.filter((contact) => {
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(term.toLowerCase())
      });
      setSearchResult(newcontactlist);
    } else{
      setSearchResult(contacts);
    }

  }

  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={SearchTerm.length < 1 ? contacts : SearchResult} deleteHandler={RemoveContact} Term={SearchTerm} searchhandle={searchhandeler}/>} />
          <Route path="/add" exact element={<AddContact addcontacthandler = {addcontacthandler} />} />
          <Route path="/contact/:id" exact element={<ContactDetail />} />
          <Route path="/edit" exact element={<EditContact updatehandler = {updatehandler} />} />
        </Routes>
        {/* <AddContact addcontacthandler = {addcontacthandler}/> */}
        {/* <ContactList contacts={contacts} deleteHandler={RemoveContact}/> */}
      </Router>
      
    </div>
    
  );
};

export default App;
