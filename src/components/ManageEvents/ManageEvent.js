import React from 'react';
import useEvent from '../useEvent';

const ManageEvent = () => {

    const [event, setEvent] = useEvent();

    const handleEventDelete = (id) => {
        const procced = window.confirm(`Are you sure you want delete this user`);
        if (procced) {
            fetch(`https://quiet-journey-29484.herokuapp.com/event/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const restUser = event.filter(eve => eve._id !== id)
                    setEvent(restUser);
                })
        }
    }

    return (
        <div className='App'>
            <h1 className='my-3'>Manage Events</h1>
            {event.map(e => <li className='my-2' key={e._id}>{e.name}-{e.email}-{e.event}-<button onClick={() => handleEventDelete(e._id)}>Delete</button></li>)}
        </div>
    );
};

export default ManageEvent;