import React, { useState } from "react";
import "../Style/form.css"; // Make sure to adjust the path to your CSS file
import Flowbanner from "../Components/Flowbanner";

const Register = () => {
  const [formData, setFormData] = useState({
    employee: "yes", // Set the default value for "employee"
    email: "",
    phone: "",
    age: "",
    gender: "preferNotToSay",
    experience: "",
    designation: "",
    department: "",
    institute: "",
    programme: "diploma",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
  };

  const handleReset = () => {
    // Reset the form fields
    setFormData({
      employee: "yes",
      email: "",
      phone: "",
      age: "",
      gender: "preferNotToSay",
      experience: "",
      designation: "",
      department: "",
      institute: "",
      programme: "diploma",
    });
  };

  const page = "Register";
  return (
    <>
      <Flowbanner name={page} />
      <div className="form-top">
        <div className="form-inner">
          <div className="fomr-label">
            Are you an employee of Chandigarh University?
          </div>
          <div className="form-input">
            <select
              name="employee"
              value={formData.employee}
              onChange={handleChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-label">Email Address</div>
          <div className="form-input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="resp-div-form">
            <div style={{ width: "100%", flex: "1" }}>
              <div className="form-label">Phone Number</div>
              <div className="form-input">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div
              className="resp-right-form"
              // style={{ marginInlineStart: "4rem", width: "100%", flex: "1" }}
            >
              <div className="form-label">Enter Your Age</div>
              <div className="form-input">
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
          <div className="form-label">Gender</div>
          <div className="form-input">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="preferNotToSay">Prefer Not to Say</option>
            </select>
          </div>
          <div className="form-label">
            Teaching Experience (College/University Level)
          </div>
          <div className="form-input">
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="resp-div-form">
            <div style={{ width: "100%", flex: "1" }}>
              <div className="form-label">Designation</div>
              <div className="form-input">
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="resp-right-form">
              <div className="form-label">
                Department/Subject That You Teach
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
          <div className="form-label">Current Institute/College/University</div>
          <div className="form-input">
            <input
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              required
              style={{ width: "90%" }}
            />
          </div>
          <div className="form-label">Select Programme</div>
          <div className="form-input">
            <select
              name="programme"
              value={formData.programme}
              onChange={handleChange}
            >
              <option value="diploma">Diploma 50,000</option>
              <option value="certificate">Certificate 35,000</option>
              <option value="bachelor">Bachelor 1,15,000</option>
              <option value="master">Master 1,50,000</option>
            </select>
          </div>
          <div>
            <button className="form-submit" type="submit">
              Submit
            </button>
            <button className="form-reset" type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
