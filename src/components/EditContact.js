import React from "react";
import { useNavigate , useLocation, Link } from 'react-router-dom';


class EditContactClass extends React.Component{
  constructor(props){
    super(props)
    const{ id , name , email } = props.location.state;
    this.state = {
        id,
        name,
        email
    }
  }

    update = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are needed")
            return
        }
        this.props.updatehandler(this.state);
        this.setState({
            name:'',
            email:'',
        });
        console.log('from editcontact',this.props);
        this.props.navigate('/');

    }
    render(){
        return(
            <div className="m-0 p-6 pl-8 h-full w-screen">
                <div className="mt-px mb-3">
                    <Link to="/">
                        <button className="underline p-2 text-sm text-sky-600">Back to contacts</button>
                    </Link>
                </div>
                <h2 className="text-xl font-bold">Edit Contact</h2>
                <form className="ml-3 my-3" onSubmit={this.update}>
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
                        <input type="text" name="email" placeholder="Email " value={this.state.email}
                            className="w-8/12 text-sm border border-gray-300 rounded-md my-2 p-3"
                            onChange={ (e) => this.setState({email: e.target.value})}
                         />
                    </div>
                    <button className="mt-4 text-slate-200 bg-blue-700 p-2 text-sm rounded-lg w-44 font-bold">Update</button>
                </form>
            </div>
        );
    }
}

function EditContact(props) {
    let navigate = useNavigate();
    let location = useLocation().state;
    return <EditContactClass {...props} navigate={navigate} location={location} />
}

export default EditContact;