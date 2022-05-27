import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';


const EmailVerification = () => {

    const [sendEmailVerification] = useSendEmailVerification(auth);

    return (
        <div>
            <div className=''>
                <div>
                    <Alert className=' m-3' variant={"danger"}>
                        We have sent account verification link to your email address. Please click on the link given in email to verify your account.
                    </Alert>
                    <Alert className='w-50 m-3' variant={"warning"}>
                        If Your didn't receive email, <button style={{ background: "#fff3cd" }} className='border-0 text-primary'
                            onClick={async () => {
                                await sendEmailVerification();
                                toast('Sent Email');
                            }}
                        ><u>Click Here</u>
                        </button>  to resend the verification email
                    </Alert>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default EmailVerification;