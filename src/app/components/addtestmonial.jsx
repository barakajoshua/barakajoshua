import React, { useState } from 'react';

const AddTestmony = () => {
    const [userData, setUserdata] = useState({
        name: '',   
        email: '',
        role: '',
        text: '',
        rating: '5'
    });
    const submitForm = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to a server
        console.log("Testimonial submitted:", userData);
        // Reset form after submission
        setUserdata({
            name: '',
            email: '',
            role: '',
            text: '',
            rating: '5'
        });
    };

    return(
        <>
        <form action="" onSubmit={submitForm}>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                value={userData.name}
                onChange={(e) => setUserdata({ ...userData, name: e.target.value })}
            />
            <br />
            <input
                type="text"
                name="email"
                placeholder="Your email"
                value={userData.email}
                onChange={(e) => setUserdata({ ...userData, email: e.target.value })}
            />
            <br />
            <input
                type="text"
                name="role"
                placeholder="Your role"
                value={userData.role}
                onChange={(e) => setUserdata({ ...userData, role: e.target.value })}
            />
            <br />
            <textarea
                name="text"
                placeholder="Your testimonial"
                value={userData.text}
                onChange={(e) => setUserdata({ ...userData, text: e.target.value })}
            ></textarea>
            <br />
            <div className="flex items-center">
                <span className="mr-2">Rating:</span>
                <select
                    name="rating"
                    value={userData.rating}
                    onChange={(e) => setUserdata({ ...userData, rating: e.target.value })}
                >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
            <button type="submit" className="bg-[#64FFDA] text-[#1A2236] px-4 py-2 rounded hover:bg-[#52e0c4] transition">
                Submit Testimonial
            </button>
        </form>

        </>
    )
}
export default AddTestmony;