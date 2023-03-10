
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GrFormClose } from "react-icons/gr";
import axios from 'axios'

function Home() {
  const [data, setdata] = useState([])

  useEffect(() => {
    getdata();
  }, [])


  async function getdata() {
    let result = await axios.get("http://localhost:3003/users")
    setdata(result.data.reverse())
  }


  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`)
    getdata()
  }

  

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                data.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                        View
                      </Link>
                      <Link
                        class="btn btn-outline-primary mr-2"
                        to={`/users/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      {/* <Link
                        class="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Link> */}
                      
                      <button className="btn btn-danger">
                        <GrFormClose
                          className=""
                          onClick={() => deleteUser(user.id)}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home