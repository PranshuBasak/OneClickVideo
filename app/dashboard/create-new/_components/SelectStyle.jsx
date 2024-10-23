import Image from 'next/image';
import React, { useState } from 'react'

function SelectStyle({onUserSelect}) {

    const styleOptions = [
        {
            name: 'Cartoon',
            image: '/Cartoon.jpg'
        },
        {
            name: 'Photorealistic',
            image: '/Photorealistic.jpg'
        },
        {
            name: 'Fantasy',
            image: '/Fantasy.jpg'
        },
        {
            name: 'Gothic',
            image: '/Gothic.jpg'
        },
        {
            name: 'Cinematic',
            image: '/Cinematic.jpg'
        },
        {
            name: 'Mythological',
            image: '/Mythological.jpg'
        },
        {
            name: 'Romanticism',
            image: '/Romanticism.jpg'
        },
        {
            name: 'Landscape',
            image: '/Landscape.jpg'
        },
        {
            name: 'Neon',
            image: '/Neon.jpg'
        },
        {
            name: 'Whimsical',
            image: '/Whimsical.jpg'
        }
    ];

    const [selected, setselected] = useState();

  return (
    <div>
        <h2 className="font-bold text-2xl text-primary pt-7 p-2">
            Style
        </h2>
        <p className="text-gray-500 p-2">Select a vidoe style</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-3"
         >
            {styleOptions.map((item, index) => (
                <div className={`relative hover:scale-105 transition-all cursor-pointer
                 ${selected==item.name&& 'border-4 border-primary rounded-lg'}`} key={index}>                
                    <img src={item.image}  alt={item.name}  width={100} height={100} className='h-48 object-cover rounded w-full ' onClick={() =>{
                        setselected(item.name)
                        onUserSelect('imageStyle',item.name)
                        }}/>
                    <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg" >
                        {item.name}
                    </h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectStyle