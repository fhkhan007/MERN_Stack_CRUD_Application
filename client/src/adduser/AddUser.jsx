import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const AddUser = () => {

    const users= {
        name:"",
        email:"",
        address:""
    }

    const [user,setuser] = useState(users);
    const navigate = useNavigate();

    const  inputhandler = (e) => {
        const {name,value} = e.target;
        setuser({...user, [name]: value})
    }

    const submitForm = async (e) => {
        e.preventDefult();
        await axios.post("http://localhost:8000/api/user", user)
        .then((response) => {
            toast.success(response.data.massage, { position: "top-right"});
            navigate("/")
        })
        .catch((error)=> {
            console.log(error)
        })
    }
        
  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};



export default AddUser