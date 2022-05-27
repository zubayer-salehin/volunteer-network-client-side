import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import "./Banner.css"


const Banner = () => {
    return (
        <div>
            <h3 className='fw-bold text-center mt-5 pt-2'>I GROW BY HELPING PEOPLE IN NEED.</h3>
            <div className='d-flex justify-content-center my-5'>
                <InputGroup className="inputGroup">
                    <FormControl className='searchInput'
                        placeholder="Search..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button className='px-4 search' variant="primary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Banner;