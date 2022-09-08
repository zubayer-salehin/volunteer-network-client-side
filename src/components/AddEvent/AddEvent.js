import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddEvent = () => {

    const [select, setSelect] = useState("");
    const navigate = useNavigate();

    const handleAddEvent = (e) => {
        e.preventDefault();
        const addEventInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            date: e.target.date.value,
            volunteerList: e.target.volunteer.value,
            event: e.target.event.value,
            image: e.target.image.value,
            color: select
        }

        axios.post("https://volunteer-network-server-side.onrender.com/event", addEventInfo)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Event is Added');
                    e.target.reset();
                    navigate("/home");
                }
            })
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='w-25 mt-3 p-3 border border-1 border-dark'>
                <h2>Add Event</h2>
                <form className='mt-3' onSubmit={handleAddEvent}>
                    <input type="text" name="name" placeholder="Enter Your Name" required/><br />
                    <input type="email" name="email" placeholder="Enter Your Email" required/><br />
                    <input type="date" name="date" required /><br />
                    <input type="text" name="volunteer" placeholder="description" required /><br />
                    <input type="text" name="event" placeholder="Enter Your Event" required /><br />
                    <input type="text" name="image" placeholder="Please enter Your image url" required /><br />
                    <select style={{width:"100%",height:"40px"}} onChange={(e) => setSelect(e.target.value)} className="mb-3">
                        <option value="color1">Select color</option>
                        <option value="color1">color1</option>
                        <option value="color2">color2</option>
                        <option value="color3">color3</option>
                        <option value="color4">color4</option>
                    </select>
                    <input className='bg-success text-white border-0' type="submit" value="Add Event" /><br />
                </form>
            </div>
        </div>
    );
};

export default AddEvent;