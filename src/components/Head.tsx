import React from 'react'

export default function Head({ children }: { children: React.ReactNode }) {
    return (
        <h2 className='font-black text-[1.5rem] md:text-[2rem] my-3 font-[Italiana]'>
            {children}
        </h2>
    )
}
