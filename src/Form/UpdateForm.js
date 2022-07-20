import { useState } from "react"
import contactsStore from "../store";
import { useEffect } from "react";

const UpdateForm = () =>{
    const selectedContact = contactsStore(state => state.selectedContact);
    const updateContact = contactsStore(state => state.updateContact);

    const [name, setName] = useState(selectedContact.name);
    const [phone, setPhone] = useState(selectedContact.phone);
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateContact({id: selectedContact.id, name: name, phone: phone});
    }
    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <p>Update Form</p>
            <input type={'text'} placeholder={'Name...'} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type={'number'} placeholder={'Phone...'} value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            <button type="submit">Update  Contact</button>
        </form>
    )
}
export default UpdateForm;