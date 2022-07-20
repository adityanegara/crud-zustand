import contactsStore from "./store";
import Form from "./Form/Form";
import UpdateForm from "./Form/UpdateForm";

const App = () =>{
  const contacts = contactsStore(state => state.contacts);
  const selectedContact = contactsStore(state => state.selectedContact);
  const deleteContact = contactsStore(state => state.deleteContact);
  const selectContact = contactsStore(state => state.selectContact);

  const renderContacts = (contacts) =>{
    return contacts.map((contact) =>{
      return(
        <div key={contact.id}>
          <p>Name : {contact.name}</p>
          <p>Phone : {contact.phone}</p>
          <button onClick={()=>{deleteContact(contact.id)}}> Delete </button>
          <button onClick={()=>{selectContact(contact)}}>Update Contact</button>
        </div>
      )
    })
  }

  return(
    <div>
      <button onClick={()=>{console.log(selectedContact)}}>test</button>
      <Form/>
      <UpdateForm/>
      {renderContacts(contacts)}
    </div>
  )
}

export default App;