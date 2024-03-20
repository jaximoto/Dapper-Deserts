'use client'
import React, { useState } from 'react';

export default function Hamburger()
{
    const [isOpen, setIsOpen] = useState(false);

    //Handles opening and closing of menu
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return(
        <button onClick={handleClick}
        className='fixed flex flex-col justify-center
        items-center gap-y-1 h-7 w-7 bg-slate-100 rounded-sm'>
            <span className={` bg-stone-800 block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm
                    ${isOpen ? 
                        'rotate-45 translate-y-2' : '-translate-y-0.5'
                        }`}>

            </span>
            <span className={` bg-stone-800 block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm ${isOpen ? 
                        'opacity-0' : 'opacity-100'
                        }`}>

                    </span>
            <span className={` bg-stone-800 block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm ${isOpen ? 
                        '-rotate-45 -translate-y-2' : 'translate-y-0.5'
                        }`}>

                    </span>
        </button>
    )
}