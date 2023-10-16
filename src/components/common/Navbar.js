import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const myStyle = {
        color:'white',
        textDecoration:'none'
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Student Management</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-3">
                            <Link className="nav-Link active" style={myStyle} aria-current="page" to={"/view-students"}>View All Students</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link className="nav-Link" style={myStyle} to={"/add-student"}>Add new Student</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
