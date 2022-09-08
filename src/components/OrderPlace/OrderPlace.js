import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Checkout = () => {

    const { id } = useParams();
    const [selectEvent, setSelectEvent] = useState({});
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://volunteer-network-server-side.onrender.com/event/${id}`)
            .then(response => {
                const {data} = response
                setSelectEvent(data);
            })
    }, [id])

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        const selectEventUserInfo = {
            name: user?.displayName,
            email: user?.email,
            event: selectEvent?.event,
            date: e.target.date.value,
            address: e.target.address.value,
            phone: e.target.phone.value
        }

        axios.post("https://volunteer-network-server-side.onrender.com/order", selectEventUserInfo)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    e.target.reset();
                    navigate("/bookingEvents");
                }
            })
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='w-25 mt-4 p-3 border border-1 border-dark'>
                <h2>Please Order</h2>
                <form className='mt-3' onSubmit={handlePlaceOrder}>
                    <input type="text" name="name" placeholder="Enter Your Name" value={user?.displayName} required disabled /><br />
                    <input type="email" name="email" placeholder="Enter Your Email" value={user?.email} required disabled /><br />
                    <input type="text" name="event" placeholder="Enter Your Event" value={selectEvent.event} required disabled /><br />
                    <input type="date" name="date" required /><br />
                    <input type="text" name="address" placeholder="Enter your address" required /><br />
                    <input type="text" name="phone" placeholder="Enter your phone" required /><br />
                    <input className='bg-primary text-white border-0' type="submit" value="Order Place" /><br />
                </form>
            </div>
        </div>
    );
};

export default Checkout;