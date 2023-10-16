import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/students", {
      validateStatus: () => {
        return true;
      }
    });
    if (result.status === 302) {
      setStudents(result.data);
    }
  }

  
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>

        <h1 className='mb-4'>Student Management System</h1>

        {students.map((student) => (
          <div className="col-md-3 m-4 card p-0 bg-secondary text-white shadow" style={{ width: '18rem' }}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" className="card-img-top" style={{ height: '' }} alt="..." />
            <div className="card-body">
              <h3 className="card-title">{student.firstName +" " +student.lastName}</h3>
              <h5 className="card-text">Student Id - {student.id}</h5>
              <h5 className="card-text">Role - {student.department}</h5>
              <h5 className="card-text">Email - {student.email}</h5>
              
            </div>
          </div>))}

      </div>


    </div>
  )
}

export default Home;
