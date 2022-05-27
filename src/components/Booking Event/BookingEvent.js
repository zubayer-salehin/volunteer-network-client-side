import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingEvent = () => {

    const [user] = useAuthState(auth)
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const email = user.email
        console.log(email);
        axios.get(`https://quiet-journey-29484.herokuapp.com/orders?email=${email}`)
            .then(response => {
                const { data } = response;
                setEvents(data)
            })
    }, [user])

    const handleEventDelete = (id) => {
        const procced = window.confirm(`Are you sure you want delete this user`);
        if (procced) {
            fetch(`https://quiet-journey-29484.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const restUser = events.filter(event => event._id !== id)
                    setEvents(restUser);
                })
        }
    }

    return (
        <div className='App'>
            <h1 className='my-3'>All Bookings Events</h1>
            {events.map(event => <li className='my-2' key={event._id}>{event.name}-{event.email}-{event.event}-<button onClick={() => handleEventDelete(event._id)}>Delete</button></li>)}
        </div>
    );
};

export default BookingEvent;