import React from 'react'
import Itemcard from './Itemcard'

const ItemList = ({user}) => {
  return (
    <div className='bg-yellow-300 min-h-screen'>
            <div className='flex justify-center text-center text-3xl font-bold '>
                <div className="text-3xl text-blue-600 font-bold mt-11 mb-11 flex flex-row">POKIYARD <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-pokemon-ball-png-images-4.png" className='h-10 ml-3' />
                </div>
            </div>
            <div>
                <img src="https://freepngimg.com/save/20274-legendary-pokemon-transparent/1800x1539" className='ml-6 w-96 ' />
            </div>
            <div className='font-bold text-3xl text-center mt-10'>
                <h1 className='underline decoration-blue-600 underline-offset-8 decoration-9 '>Your Items</h1>
            </div>
            <div className='text-center mt-9 text-lg font-bold'>
                Total Items - <span className='text-blue-400'>{user.nItems}</span>
            </div>
            
            {user.specialItems.map((poki)=><Itemcard itemName={poki.itemName} itemImage={poki.itemImage}/>)}

            <div className='bg-yellow-300 h-20 mt-28 font-bold text-center '>
                Copyright © 2024 PokiYard Labs Inc.
            </div>

            


        </div>
  )
}

export default ItemList