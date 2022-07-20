import create from 'zustand'

const contactsStore = create(set => ({
    contacts : [{id : 1, name: 'Aditya Negara', phone: '081289503000'}, {id: 2, name: 'Rina', phone: '123'}],
    selectedContact : {id: 3, name: 'test', phone: '123'},
    selectContact : (contact) =>{
        set(({selectedContact : contact}))
    },
    createContact: (contact) =>{
        set(state => ({ contacts: [...state.contacts, contact] }))
    },
    updateContact: ({id, name, phone}) =>{
        console.log(id);
        console.log(name);
        console.log(phone);
        set(state => ({
            contacts: state.contacts.map(contact => {
                if(contact.id === id){
                    return {
                       id : id,
                       name: name,
                       phone, phone
                    }
                }else{
                    return contact;
                }
            })
        }))
    },
    deleteContact: (id) =>{
        set(state => ({
            contacts: state.contacts.filter(contact => contact.id !== id)
        }))
    },
}))

export default contactsStore;