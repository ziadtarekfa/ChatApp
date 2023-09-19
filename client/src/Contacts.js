import axios from "axios";
import { useState, useEffect, useRef } from 'react'
import ContactCard from './components/ContactCard';
import AddContact from "./components/AddContact";

const Contacts = () => {

    const [contacts, setContacts] = useState([]);
    const addContactRef = useRef();

    const addContact = (e) => {
        e.preventDefault();
        addContactRef.current.showModal();
    }
    useEffect(() => {
        axios.get('data/contacts.json').then((response) => {
            setContacts(response.data.contacts);
        }).catch((error) => {
            console.error('Error fetching contacts: ', error);
        });
    }, []);

    return (
        <div className="h-[100vh] bg-[#FBFDF6] w-1/3 px-8 shadow-md" >
            <div className="flex items-center justify-between  mt-12">
                <h1 className="text-3xl font-semibold">Whatsapp</h1>
                <button className="bg-blue-400 py-2 px-4 rounded-lg text-white" onClick={addContact}>Add Contact</button>
            </div>
            <input placeholder="Search for contact" className="bg-[#E1ECE1] rounded-3xl w-full p-4 py-3 mt-6" />
            <div className="flex flex-col mt-6">
                {
                    contacts.map((contact) => {
                        return (
                            <ContactCard key={contact.id} name={contact.name} />
                        )
                    })
                }
            </div>
            <AddContact innerRef={addContactRef} />
        </div>
    );
}

export default Contacts;