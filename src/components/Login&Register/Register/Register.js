import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import Social from '../Social/Social';

const Register = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, , error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger mb-2'>{error?.message}</p>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    }

    if (user) {
        navigate("/home");
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='w-25 mt-4 p-3 border border-1 border-dark'>
                <h2>Register</h2>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Enter Your Name" required /><br />
                    <input type="email" name="email" placeholder="Enter Your Email" required /><br />
                    <input type="password" name="password" placeholder="Enter Your Password" required /><br />
                    {errorElement}
                    <input className='bg-primary text-white border-0' type="submit" value="Register" /><br />
                </form>
                <p className='mt-1'>Already have a Account ? <Link to="/login">Login</Link></p>
                <Social></Social>
            </div>
        </div>
    );
};

export default Register;