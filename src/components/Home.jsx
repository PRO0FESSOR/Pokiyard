import React from 'react'
import { Link } from 'react-router-dom'
import Itemcard from './Itemcard'
import Pokicard from './Pokicard'

const Home = ({ user }) => {
    return (
        <div className='bg-yellow-300 min-h-screen'>
            <div className='flex justify-center text-center text-3xl font-bold '>
                <div className="text-3xl text-blue-600 font-bold mt-11 mb-11 flex flex-row">POKIYARD <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-pokemon-ball-png-images-4.png" className='h-10 ml-3' />
                </div>
            </div>
            <div>
                <img src="https://freepngimg.com/thumb/pokemon/20346-7-pokemon-hd.png" className='ml-6 w-96 ' />
            </div>
            <div className='font-bold text-3xl text-center mt-10'>
                <h1 className='underline decoration-blue-600 underline-offset-8 decoration-9 '>PROFILE</h1>
            </div>
            <div className='bg-blue-300 m-4 rounded-lg h-96 p-2' >

                <h1 className='text-center font-bold text-white text-2xl mt-'>WELCOME ,, <span className='text-blue-500 underline decoration-wavy decoration-black underline-offset-4'>{user.username}</span></h1>
                <div className='flex flex-row'>
                    <img src="https://i.pinimg.com/originals/28/ec/d6/28ecd67d058708db6a65de3e88f2c9f6.png" className='  w-40 h-50 ml-2 mt-6' />
                    <div className='flex flex-col justify-center items-center'>
                        <div className='bg-green-300 rounded-3xl text-lg font-semibold px-4 py-2  mb-3 ml-3 shadow-xl'>
                            Money - {user.money}
                        </div>
                        <div className='bg-orange-300 rounded-3xl text-lg font-semibold px-4 py-2 mb-3 ml-3 shadow-xl'>
                            Team - {user.teamName}
                        </div>
                        <div className='bg-yellow-300 rounded-3xl text-lg font-semibold px-4 py-2 mb-3 ml-3 shadow-xl'>
                            Fights - {user.fights}
                        </div>
                        <div className='bg-purple-300 rounded-3xl text-lg font-semibold px-4 py-2 mb-3 ml-3 shadow-xl'>
                            Pokemons - {user.nPoki}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-purple-300 mt-20 m-4 rounded-lg p-2 h-28'> 
                <div className="flex flex-row justify-between">
                <h1 className='text-2xl font-bold ml-6 mt-7'>POKEMONS</h1>
                <div >
                    <Link to="/pokilist"><img src="https://i.pinimg.com/originals/48/1d/a3/481da3557c38dcffa7c75aa6e581aefb.png" className='h-40'/></Link>
                </div>
                </div>
            </div>
            <div className='bg-green-300 mt-20 m-4 rounded-lg p-2 h-28'> 
                <div className="flex flex-row justify-between">
                <h1 className='text-2xl font-bold ml-6 mt-7'>ITEMS</h1>
                <div >
                    <Link to="/itemlist" ><img src="https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-case-for-tennis-rackets-icon-in-isometric-3d-style-isolated-on-png-image_4884731.png" className='h-40'/></Link>
                </div>
                </div>
            </div>
            <div className='bg-orange-300 mt-20 m-4 rounded-lg p-2 h-28'> 
                <div className="flex flex-row justify-between">
                <h1 className='text-2xl font-bold ml-6 mt-7'>SHOP</h1>
                <div >
                    <button><img src="https://png.pngtree.com/png-vector/20221204/ourmid/pngtree-video-game-shop-theme-logo-template-play-controller-leisure-vector-png-image_27241012.png" className='h-40'/></button>
                </div>
                </div>
            </div>
            <div className='bg-yellow-300 h-20 mt-28 font-bold text-center '>
                Copyright © 2024 PokiYard Labs Inc.
            </div>
        </div>
    )
}

export default Home