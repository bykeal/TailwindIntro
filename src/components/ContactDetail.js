import React from "react";
import user3 from '../images/user3.png';
import { Link , useLocation} from "react-router-dom";

const ContactDetail = (props) => {
    const Detailstate = useLocation().state;
    const {email, name} = Detailstate;
    console.log(email);
 return(
    <div className="h-auto w-6/12 p-4 mt-8 m-auto text-center shadow-lg">
        <div className="">
                <img src={user3} alt='user' className="m-auto"/>
            <div className="content">
                <div className="text-3xl font-bold">{name}</div>
                <div className="text-lg">{email}</div>
            </div>
        </div>
        <div className="mt-4">
            <Link to="/">
                <button className="text-slate-200 bg-blue-700 p-2 text-sm rounded-lg">Back to contacts</button>
            </Link>
        </div>
    </div> 
 );
};

export default ContactDetail;