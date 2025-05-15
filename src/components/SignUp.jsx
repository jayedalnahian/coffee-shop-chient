import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)


    const handleSignUp = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password, ...userProfileInfo } = Object.fromEntries(formData.entries());


        console.log({ email, ...userProfileInfo });

        const userInfo = { email, ...userProfileInfo };








        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                if (user.uid) {

                    fetch('http://localhost:3000/users', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    title: "Sign Up successful!",
                                    icon: "success",
                                    draggable: true,
                                    timer: 1500
                                });
                                e.target.reset();
                            }

                        })
                }

            })
            .catch((error) => {
                if (error.message == 'Firebase: Error (auth/invalid-email).') {
                    Swal.fire({
                        title: "Email is missing!",
                        icon: "error",
                        draggable: true,
                        timer: 2000
                    });
                }
                else if (error.message == 'Firebase: Error (auth/missing-email).') {
                    Swal.fire({
                        title: "Email is missing!",
                        icon: "error",
                        draggable: true,
                        timer: 2000
                    });
                }
                else if (error.message == 'Firebase: Error (auth/missing-password).') {
                    Swal.fire({
                        title: "Password is missing!",
                        icon: "error",
                        draggable: true,
                        timer: 2000
                    });
                }
                else if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    Swal.fire({
                        title: "This email already in use!",
                        icon: "error",
                        draggable: true,
                        timer: 2000
                    });
                    e.target.reset();
                }

                else if (error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    Swal.fire({
                        title: "This password is not valid!",
                        text: "Use a password of more than six characters.",
                        icon: "error",
                        draggable: true,
                        timer: 2000
                    });
                }


            });

    }


    return (
        <div className="bg-base-100 py-10 px-5 border rounded shadow-2xl w-6/12 flex flex-col justify-center items-center mx-auto my-50">

            <h2 className='text-4xl font-bold pb-4'>Sing Up now!</h2>
            <form onSubmit={handleSignUp} className="flex flex-col gap-2 *:w-full w-xl">
                <label className="label font-semibold text-black">Name</label>
                <input name='name' type="text" className="border rounded p-2" placeholder="Name" />
                <label className="label font-semibold text-black">Address</label>
                <input name='address' type="text" className="border rounded p-2" placeholder="Address" />
                <label className="label font-semibold text-black">Phone Number</label>
                <input name='number' type="text" className="border rounded p-2" placeholder="Phone Number" />
                <label className="label font-semibold text-black">Photo URL</label>
                <input name='photo' type="text" className="border rounded p-2" placeholder="Photo URL" />
                <label className="label font-semibold text-black">Email</label>
                <input name='email' type="email" className="border rounded p-2" placeholder="Email" />
                <label className="label font-semibold text-black">Password</label>
                <input name='password' type="password" className="border rounded p-2" placeholder="Password" />
                <button type='submit' className="btn btn-neutral mt-4 ">Sign Up</button>
            </form>
        </div>



    );
};

export default SignUp;