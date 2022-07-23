import React from "react";
import { useNavigate } from 'react-router-dom';


class AddContactClass extends React.Component{
    state = {
        name:'',
        email:'',
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are needed")
            return
        }
        this.props.addcontacthandler(this.state);
        this.setState({
            name:'',
            email:'',
        });
        console.log('from addcontact',this.props);
        this.props.navigate('/');

    }
    render(){
        return(
            <div className="m-0 p-6 pl-8 h-full w-screen">
                <h2 className="text-xl font-bold">Add Contact</h2>
                <form className="ml-3 my-3" onSubmit={this.add}>
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input type="text" 
                            name="name"
                            placeholder="Name" 
                            className="w-8/12 text-sm border border-gray-300 rounded-md my-2 p-3"
                            value={this.state.name}
                            onChange={ (e) => this.setState({name: e.target.value})}
                         />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email " className="w-8/12 text-sm border border-gray-300 rounded-md my-2 p-3" value={this.state.email}
                            onChange={ (e) => this.setState({email: e.target.value})}
                         />
                    </div>
                    <button className="mt-4 text-slate-200 bg-blue-700 p-2 text-sm rounded-lg w-44 font-bold">Add</button>
                </form>
            </div>
        );
    }
}

function AddContact(props) {
    let navigate = useNavigate();
    return <AddContactClass {...props} navigate={navigate} />
}

export default AddContact;