import React from 'react'

const Pokicard = ({ pokiName, pokiImage, pokiLevel }) => {
    return (
        <div className='bg-purple-300 mt-20 m-4 rounded-lg p-2 h-28'>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className='text-2xl font-bold ml-6 mt-7'>{pokiName}</h1>
                    <div className='mt-6'>
                    <span className='bg-blue-400 p-2 rounded-full font-bold text-2xl mt-20'>{pokiLevel}</span>
                    </div>
                </div>
                <div >
                    <img src={pokiImage} className='h-40' />
                </div>
            </div>
        </div>

    )
}

export default Pokicard