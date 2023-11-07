import React, { useState } from "react";
import "../Style/form.css"; // Make sure to adjust the path to your CSS file
import Flowbanner from "../Components/Flowbanner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const checkForm = () => {
    let isValid = true; // Assume the form is valid by default
    const age = parseInt(formData.age, 10);

    // Email Validation
    if (formData.email === "") {
      toastError("Email is required");
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      toastError("Invalid email address");
      isValid = false;
    }

    // Age Validation
    else if (formData.age === "") {
      toastError("Age is required");
      isValid = false;
    } else if (isNaN(age) || age < 18 || age > 35) {
      toastError("Age must be between 18 and 35");
      isValid = false;
    }

    // Phone Number Validation
    else if (formData.phone === "") {
      toastError("Phone Number is required");
      isValid = false;
    } else if (formData.phone === "" || formData.phone.length !== 10) {
      toastError("Phone number is required and must be 10 digits long");
      isValid = false;
    }

    return isValid;
  };

  const validateEmail = (email) => {
    // A simple email validation regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkForm();
    if (isValid) {
      toast.success("Registered Successfully", {
        position: "top-center",
        autoClose: 1200,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        textAlign: "center",
      });
      // Handle form submission, e.g., send data to the server
      setTimeout(() => {
        window.location.reload();
        window.scrollTo(0, 0);
      }, 1900);
    }
  };

  const toastError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000, // Adjust the duration as needed
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      textAlign: "center",
    });
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
    toast.warn("Form Reset Successfully", {
      position: "top-center",
      autoClose: 500,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      textAlign: "center",
    });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
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
              maxLength={50}
            />
          </div>
          <div className="resp-div-form">
            <div style={{ width: "100%", flex: "1" }}>
              <div className="form-label">Phone Number</div>
              <div className="form-input">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ width: "90%" }}
                  inputMode="numeric"
                  maxLength={10}
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
              maxLength={2}
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
                  maxLength={50}
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
                  maxLength={50}
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
              maxLength={150}
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
            <button
              className="form-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="form-reset" type="button" onClick={handleReset}>
              Reset
            </button>
            <ToastContainer className="toastifyCss" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
