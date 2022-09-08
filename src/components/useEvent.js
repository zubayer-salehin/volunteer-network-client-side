import axios from 'axios';
import { useEffect, useState } from 'react';

const useEvent = () => {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get('https://volunteer-network-server-side.onrender.com/event')
            .then(response => {
                const data = response.data
                setEvent(data);
            })
    }, [])

    return [event,setEvent]
};

export default useEvent;