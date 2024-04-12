import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return (
        <>
        <div className='bg-yellow-300 min-h-screen'>
            <div className=" flex flex-col justify-center items-center">

                <div className="text-3xl text-blue-600 font-bold mt-11 mb-11 flex flex-row">POKIYARD <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-pokemon-ball-png-images-4.png" className='h-10 ml-3'/></div>
                
                <div className="bg-white p-8 shadow-md w-80 rounded-2xl">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Login to PokeYard App</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">Username</label>
                            <input type="text" id="username" name="username" onChange={e => setUsername(e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                        </div>
                    </form>
                </div>

                <div>
                    <img src="https://pokemon.gishan.cc/static/i/pokemon/charizard.png" alt="" />
                </div>
            </div>
            </div>
        </>
    )
}

export default Login