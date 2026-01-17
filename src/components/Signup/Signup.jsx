import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from "/lib/firebase";

import auth from "/lib/firebase";


function Signup() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
      console.log('Input', name, ":", value)
      setIsSubmitting(true)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Submitted", formData)
    
      try {
          const docRef = await addDoc(collection(db, "registrations"), {
              name: formData.name,
              email: formData.email,
              password: formData.password,
          });
      
          console.log("User stored in database successfully with ID: ", docRef.id);
      
          setFormData({
              name: "",
              email: "",
              password: "",
          });
      } catch (error) {
          console.error("Error adding document: ", error);
          console.error("❌ FULL ERROR:", error);
          console.error("Error code:", error.code);
          console.error("Error message:", error.message);
          alert("Registration failed: " + error.message);
      
      } finally {
          setIsSubmitting(false)
      }
};
  
  return (
      <div className=" min-h-screen flex items-center justify-center bg-gray-900">
          <form
              className="flex flex-col border p-15"
              action="submit"
              onSubmit={handleSubmit}
          >
              <label htmlFor="name">
                  Name:
                  <input
                      className="border m-3"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}          
                  />
              </label>
              <label htmlFor="email">
                  Email:
                  <input
                      className="border m-3"
                      type="text"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                  />
              </label>
              <label htmlFor="password">
                  Password:
                  <input
                      className="border m-3"
                      type="text"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                  />
              </label>
              <button className="border m-2 px-1" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
          </form>
      </div>
  );
}

export default Signup