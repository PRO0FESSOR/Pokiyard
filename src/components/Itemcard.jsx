import React from 'react'

const Itemcard = ({itemName,itemImage}) => {
  return (
    <div className='bg-purple-300 mt-20 m-4 rounded-lg p-2 h-28'>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className='text-2xl font-bold ml-6 mt-7'>{itemName}</h1>
                </div>
                <div >
                    <img src={itemImage} className='h-40' />
                </div>
            </div>
        </div>
  )
}

export default Itemcard