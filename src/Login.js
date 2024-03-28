import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://api.khubero.com/user/signin', {
                email,
                password
            });
            console.log(response);
            localStorage.setItem('jwtToken', response.data.message.token)
            console.log(response.data.message.token)
            navigate('/home')
        } catch (error) {
            console.error('Something went wrong: ', error);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-[#000] w-1/3 h-[450px] rounded-lg p-4 text-center flex justify-center items-center">
                    <div className="w-full shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white font-bold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border rounded-lg py-2 px-3"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full border rounded-lg py-2 px-3"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button onClick={handleSignin} type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
