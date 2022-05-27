import React from 'react';
import { useNavigate } from 'react-router-dom';
import useEvent from '../../useEvent';
import "./Event.css";

const Event = () => {

    const [event] = useEvent();
    const navigate = useNavigate();
    const handleEvent = (id) => {
        navigate(`/orderPlace/${id}`);
    }

    return (
        <div className="container mb-5">
            <div className='event-container'>
                {event.map(ev => <div onClick={() => handleEvent(ev._id)} className="event" key={ev._id}><img className='img-fluid eventImage' src={ev.image} alt="" /><span className={`eventName ${ev.color}`}>{ev.event}</span></div>
                )}
            </div>
        </div>
    );
};

export default Event;