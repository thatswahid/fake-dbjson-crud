// import axios from 'axios';
// import { useState } from 'react';


// function AddUser() {

//     const [name, setName] = useState();
//     const [username, setUsername] = useState();
//     const [email, setEmail] = useState();
//     const [phone, setPhone] = useState();
//     const [web, setWeb] = useState();

//     const submitdata =async e => {
//         e.preventDefault();
//         await axios.post("https://jsonplaceholder.typicode.com/users")
//         console.log(name,username, email,phone, web)
//     }
   
  
    
//   return (
//       <>
//           <div className="container">
//               <div className="w-75 mx-auto shadow p-5">
//                   <h2 className="text-center mb-4">Add A User</h2>
//                   <form onSubmit={submitdata}>
//                       <div className="form-group">
//                           <input
//                               type="text"
//                               className="form-control form-control-lg"
//                               placeholder="Enter Your Name"
//                               name="name"
//                               value={name}
//                               onChange={(e) => setName(e.target.value)}
//                           />
//                       </div>
//                       <div className="form-group">
//                           <input
//                               type="text"
//                               className="form-control form-control-lg"
//                               placeholder="Enter Your Username"
//                               name="username"
//                               value={username}
//                               onChange={(e) => setUsername(e.target.value)}

//                           />
//                       </div>
//                       <div className="form-group">
//                           <input
//                               type="email"
//                               className="form-control form-control-lg"
//                               placeholder="Enter Your E-mail Address"
//                               name="email"
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)}

//                           />
//                       </div>
//                       <div className="form-group">
//                           <input
//                               type="text"
//                               className="form-control form-control-lg"
//                               placeholder="Enter Your Phone Number"
//                               name="phone"
//                               value={phone}
//                               onChange={(e) => setPhone(e.target.value)}
//                           />
//                       </div>
//                       <div className="form-group">
//                           <input
//                               type="text"
//                               className="form-control form-control-lg"
//                               placeholder="Enter Your Website Name"
//                               name="website"
//                               value={web}
//                               onChange={(e) => setWeb(e.target.value)}
//                           />
//                       </div>
//                       <button className="btn btn-primary btn-block">Add User</button>
//                   </form>
//               </div>
//           </div>
//       </>
//   )
// }

// export default AddUser








import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const AddUser = () => {
   const navigate= useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        alert("submit")
        navigate("/")
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
