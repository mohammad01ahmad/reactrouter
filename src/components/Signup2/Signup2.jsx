import React, { useState } from 'react'
import { auth } from '/lib/Firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Signup2() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log("Input", name, ":", value);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        console.log("Form Submitted", formData);
        setIsSubmitting(true)
        
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            ) 
            
            console.log('User created succesfully: ', userCredentials.user)
            setFormData({
                name: "",
                email: "",
                password: ""
            })
            
        } catch (error) {
            console.log('error: ', error)
        } finally {
            setIsSubmitting(false)
        }
    }
    
    
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                action="submit"
                className="flex flex-col border p-15"
                onSubmit={handleSignUp}
            >
                Name:
                <label htmlFor="name">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border m-3"
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border m-3"
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border m-3"
                    />
                </label>
                <button className="border p-2">
                    {setIsSubmitting ? "Submitting" : "Submit"}
                </button>
            </form>
        </div>
    );
    }

export default Signup2