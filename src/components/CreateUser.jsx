import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const serverAddress = 'http://192.168.0.2:3000';

    // Handle the form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await fetch(`${serverAddress}/create_user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }) // Send username and password
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const datta = await response.json();

            console.log(datta)


            if (datta.success) {
                alert('Account Created');
                // You can redirect the user or perform any other action here
                navigate('/Login')

            } else {
                setErrorMessage('Invalid username or password');

            }


        } catch (error) {
            setErrorMessage("Error: " + error.message);
        }
    };


    // Reset error message when user starts typing
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setErrorMessage(''); // Clear error message
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrorMessage(''); // Clear error message
    };


    return (<>
        <div className='flex flex-col place-items-center justify-items-center w-full mt-[84px] bg-[#F5F7FA] '>
            <h1 className='text-[40px]'>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col place-items-center justify-center w-[100%] mb-[5px]'>
                    <label className='flex flex-col justify-items-center'>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className='w-full mt-[5px] border-[2px] border-[grey] rounded'
                        />
                    </label>
                    <label className='flex flex-col justify-items-center'>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className='mt-[5px] border-[2px] border-[grey] rounded'
                        />
                    </label>
                </div>
                {errorMessage && (
                    <div className='text-[red] mt-[10px]'>
                        {errorMessage}
                    </div>
                )}
                <button type="submit" className='w-[80%] p-[10px] bg-[#007BFF] text-[white] rounded'>
                    Register
                </button>
            </form>
        </div>
        </> );
}

export default CreateUser