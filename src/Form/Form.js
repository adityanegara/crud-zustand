import { useState } from "react"
import contactsStore from "../store";

const Form = () =>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const contacts = contactsStore(state => state.contacts);
    const createContact = contactsStore(state => state.createContact);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const id = contacts[contacts.length - 1]['id'] + 1;
        createContact({name: name, phone: phone, id: id});
    }
    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type={'text'} placeholder={'Name...'} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type={'number'} placeholder={'Phone...'} value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            <button type="submit">Create New Contact</button>
        </form>
    )
}
export default Form;