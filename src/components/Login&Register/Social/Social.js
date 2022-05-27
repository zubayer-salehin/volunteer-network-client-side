import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const divStyle = {
    width:"43%",
    height:"2px",
    background:"gray"
}

const Social = () => {

    const [signInWithGoogle,user] = useSignInWithGoogle(auth);
    const [signInWithGithub,user1] = useSignInWithGithub(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={divStyle}></div>
                <span className='mx-2'>OR</span>
                <div style={divStyle}></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='bg-success text-white border-0 w-100 py-2 rounded mb-2 mt-3'>Continue With Google</button><br />
            <button onClick={() => signInWithGithub()} className='bg-dark text-white border-0 w-100 py-2 rounded'>Continue With Github</button>
        </div>
    );
};

export default Social;