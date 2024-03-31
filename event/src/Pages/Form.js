import React, { useState } from "react";
import logo from '../Assets/c3-noBG.png'
import './Form.css'
import axios from 'axios'
import {toast} from 'react-hot-toast'
const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    contactNumber: "",
    courseNumber: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    console.log(formData)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const config = {
        headers:{
          "Content-Type": 'application/json',
          Authorization : `Bearer ${formData.email}`
        }
      }
      console.log("In Handler")
      await axios.post('http://localhost:4000/app/v1/create',formData,config)
      console.log("Data set successfully")
      toast.success(`Thank you!!! ${formData.name} for registering for event...`)
    }
    catch(error){
      console.log(error.message)
      if(error.response.status === 403){
        toast.error(`User details already registered us`)
      }
      else{
        toast.error("Network Error")
      }
    }
  };
  return (
    <div className=" bodyForm  ">
      <div className="row">
        <div className="col ">
          <div className="imageContainer">
            <div className="image2">
              <img src={logo} alt="logo" height="500px" width="500px" />
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="formContainer">
            <form
              onSubmit={handleSubmit}
              action="POST"
              className="mx-1 mx-md-4"
            >
              <fieldset>
              <legend>EVENT REGISTRATION</legend>
              <div className=" form-group">
                <input
                required
                id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group ">
                <input
                required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className=" form-group">
                    <select
                    required
                    id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className=" form-group">
                    <select
                    required
                    id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="">Select Course</option>
                      <option value="btech">B-TECH</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select
                    required
                    id="course"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="">Select Year</option>
                      <option value="I">I</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                    </select>
                  </div>
                

                <div className="form-group">
                  <select
                    name="branch"
                    id="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="AI&DS">
                      Artificial Intelligence & Data Science Engineering
                    </option>
                    <option value="AG">Agricultural Engineering</option>
                    <option value="CE">Civil Engineering </option>
                    <option value="EE">Electrical Engineering</option>
                    <option value="MineE">Mining Engineering</option>
                    <option value="MechE">Mechanical Engineering</option>
                    <option value="ECE">
                      Electronics & Communication Engineering
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                  id="contact"
                  required
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Contact Number"
                  />
                </div>

                <div className="form-group mb-4">
                  <button type="submit">Submit</button>
                </div>
              
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

