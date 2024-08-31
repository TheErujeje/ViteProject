import React, { useState, useEffect } from 'react'
import Welcomecard from '../components/Welcomecard'
import { Link, Navigate, useNavigate } from "react-router-dom";



function Complete() {
    let current_user = null;
    //error message
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate();
    const serverAddress = 'http://192.168.0.2:3000'

    //function automatically runs when page is loaded
    useEffect ( () => {
        // function to fetch data with get api
        const fetch_data = async () => {
            try {
                const response = await fetch(`${serverAddress}/current_user`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // body: JSON.stringify({'username': username})
                    mode: 'cors'
                });
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                   
                  }
                const datta = await response.json()
                setUsername(datta.username)
                console.log(datta.username)
    
            
    
            } catch (error) {
                setErrorMessage("Error: " + error.message);
            } 
    
        }
        //calling the function
        fetch_data();

    }, []);


 


    //function to call the delete api
    const handleDelete = async (event) => {
        event.preventDefault(); // may not be necessary

        try {
            const response = await fetch(`${serverAddress}/delete_user`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'username': username.username}),
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
               
              }

            const datta = await response.json()
            console.log(datta)

            if (datta.success) {
                alert('Account has been deleted!');
                // You can redirect the user or perform any other action here
                navigate('/')
            }
            // setUsername(datta.username)
            // console.log(datta.username)

        

        } catch (error) {
            setErrorMessage("Error: " + error.message);
        }
    };

    return (<>
        <div>
            Welcome {username.username}
            <Welcomecard />
            <button onClick={handleDelete}> Delete Account </button>
            {errorMessage && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                    {errorMessage}
                </div>
           
            )}
             <Link to="/"> Back Home</Link>
        </div>
        </> )
}

export default Complete