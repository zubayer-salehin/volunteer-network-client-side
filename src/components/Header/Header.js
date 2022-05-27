import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const fontWeight = { fontWeight: 500 }

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect style={{ boxShadow: "0px 5px 10px 0 rgb(0 0 0 / 0%), 0px 2px 5px 0 rgb(0 0 0 / 5%)" }} expand="lg" bg="white" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src="Group 1329.png" alt="" width="150px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={fontWeight} className='text-dark' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link style={fontWeight} className='ms-3 text-dark' as={Link} to="/addEvent">Add Events</Nav.Link>
                        <Nav.Link style={fontWeight} className='ms-3 text-dark' as={Link} to="/manageEvent">Manage Event</Nav.Link>
                        <Nav.Link style={fontWeight} className='ms-3 text-dark' as={Link} to="/bookingEvents">Booking Events</Nav.Link>
                        <Nav.Link style={fontWeight} className='ms-3 text-dark' as={Link} to="/footer">Footer</Nav.Link>
                        {user ?
                            <button style={fontWeight} onClick={() => signOut(auth)} className='bg-white border-0 ms-3'>Sing Out</button>
                            :
                            <Nav.Link style={fontWeight} className='ms-3 text-dark' as={Link} to="/login">Log in</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;