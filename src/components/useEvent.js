import axios from 'axios';
import { useEffect, useState } from 'react';

const useEvent = () => {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get('https://quiet-journey-29484.herokuapp.com/event')
            .then(response => {
                const data = response.data
                setEvent(data);
            })
    }, [])

    return [event,setEvent]
};

export default useEvent;