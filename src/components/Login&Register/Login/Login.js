import { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import "./Login.css";

const Login = () => {
    const emailRef = useRef("");
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, , error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger mb-2'>{error?.message}</p>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent Email");
        } else {
            toast("Please Enter Your Email");
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='w-25 mt-4 p-3 border border-1 border-dark'>
                <h2>Login</h2>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <input type="email" ref={emailRef} name="email" placeholder="Enter Your Email" required /><br />
                    <input type="password" name="password" placeholder="Enter Your Password" required /><br />
                    {errorElement}
                    <input className='bg-primary text-white border-0' type="submit" value="Login" /><br />
                </form>
                <p className='my-1'>Forget Password ? <button onClick={handleResetPassword} className='bg-white border-0 text-primary'>Reset Password</button></p>
                <p className='mt-0'>Don't have a Account ? <Link to="/register">Register</Link></p>
                <Social></Social>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;