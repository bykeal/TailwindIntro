import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    const inputEl = useRef("");

    // console.log(props);

    const deleteClick = (id) => {
        props.deleteHandler(id)
    }

    const renderContactList =props.contacts.map(contact => {
        return(
            <ContactCard 
            contacts={contact} 
            deleteClick={deleteClick}
            key={contact.id}>      
            </ContactCard>
        );
    }); 

    const getsearchterm = () => {
        props.searchhandle(inputEl.current.value);
        // console.log(inputEl.current.value);
    }

    return(
        <div className="m-0 p-6 pl-8 h-full w-screen" >
            <h2 className="text-2xl font-bold">Contact List</h2>
            <div className="mt-2">
                <div className="ui icon input">
                <input ref={inputEl} type="text" placeholder="Search Contacts" className="text-sm border border-gray-300 rounded-2xl w-56 p-2.5" value={props.Term} onChange={getsearchterm}/>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="mt-6">
                {renderContactList.length > 0 
                    ? (
                        <div className="flex flex-wrap gap-10 justify-center">{renderContactList}</div>
                        )
                    : "No Contacts available"
                }
            </div>
        </div>
        
    );
};

export default ContactList;