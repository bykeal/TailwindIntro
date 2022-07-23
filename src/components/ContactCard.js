import React from "react";
import user3 from '../images/user3.png';
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const {id , name, email } = props.contacts;
 return(
    <div className="flex flex-col sm:w-1/12 md:w-3/12 text-center border-2 p-4 rounded-md shadow-2xl backdrop-grayscale">
        <img className="m-auto w-24 h-24" src={user3} alt="user" />
        <div className="mt-3">
            {/* <Link to={`/contact/${id}`}> */}
            <Link to={`/contact/${id}`} state={props.contacts}>
                <div className="text-xl font-bold">{name}</div>
                <div>{email}</div>
            </Link>
        </div>
        <div className="flex gap-3 justify-center mt-3">
            <span className="cursor-pointer text-slate-200 bg-blue-700 p-2 text-sm rounded-lg w-auto font-bold" 
                onClick={() => props.deleteClick(id)}>delete
            </span>
            <Link to={`/edit`} state={{ state : props.contacts}} className="text-slate-200 bg-red-700 p-2 text-sm rounded-lg w-auto font-bold">
                Edit
            </Link>
        </div>
    </div>
 );
};

export default ContactCard;