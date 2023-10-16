import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditStudent = () => {

    let navigate = useNavigate();

    const {id} = useParams()

    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
    });

    const { firstName, lastName, email, department } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const updateStudent = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/students/update/${id}`, student);
        navigate("/view-students");
    }

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get(`http://localhost:8080/students/student/${id}`);
            setStudent(result.data);
    }

    return (
        <div className='col-sm-6 py-3 px-5 offset-3 shadow'>
            <h3 className='mb-4'>Edit Student</h3>
            <form onSubmit={(e) => updateStudent(e)}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>First Name</label>

                    <input onChange={(e) => handleInputChange(e)} className='form-control col-sm-6' type='text' name='firstName' id='firstName' required value={firstName} />

                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>Last Name</label>

                    <input onChange={(e) => handleInputChange(e)} className='form-control col-sm-6' type='text' name='lastName' id='lastName' required value={lastName} />

                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>Email</label>

                    <input onChange={(e) => handleInputChange(e)} className='form-control col-sm-6' type='text' name='email' id='email' required value={email} />

                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='department'>Department</label>

                    <input onChange={(e) => handleInputChange(e)} className='form-control col-sm-6' type='text' name='department' id='department' required value={department} />

                </div>

                <div className='row'>
                    <div className='col-sm-2'>
                        <button type='submit' className='btn btn-outline-success btn-lg'>Save</button>
                    </div>

                    <div className='col-sm-2'>
                        <Link to={"/view-students"} type='submit' className='btn btn-outline-warning btn-lg'>
                            Cancel
                        </Link>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default EditStudent;
