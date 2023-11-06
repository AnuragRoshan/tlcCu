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
  const page = "Regsiter";
  return (
    <>
      <Flowbanner name={page} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "30rem",
          fontFamily: "Montserrat",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "max-content",
            textAlign: "left",
            padding: "4rem",
            margin: "1rem",
            backgroundColor: "#f8fafc",
            boxShadow: "0 0px 5px rgba(0, 0, 0, 0.4)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-label">
                Are you an employee of Chandigarh University?
              </div>
              <select
                name="employee"
                value={formData.employee}
                onChange={handleChange}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <div className="form-label">Email Address</div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <div className="form-label">Phone Number</div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ width: "19rem" }}
                />
              </div>
              <div style={{ marginInlineStart: "1rem" }}>
                <div className="form-label">Enter Your Age</div>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  style={{ width: "19rem" }}
                />
              </div>
            </div>
            <div>
              <div className="form-label">Gender</div>
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
            <div>
              <div className="form-label">
                Teaching Experience (College/University Level)
              </div>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <div className="form-label">Designation</div>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  style={{ width: "19rem" }}
                />
              </div>
              <div style={{ marginInlineStart: "1rem" }}>
                <div className="form-label">
                  Department/Subject That You Teach
                </div>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  style={{ width: "19rem" }}
                />
              </div>
            </div>
            <div>
              <div className="form-label">
                Current Institute/College/University
              </div>
              <input
                type="text"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="form-label">Select Programme</div>
              <select
                name="programme"
                value={formData.programme}
                onChange={handleChange}
              >
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
              </select>
            </div>
            <div>
              <button className="form-submit" type="submit">
                Submit
              </button>
              <button
                className="form-reset"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
