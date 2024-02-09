import React from 'react'

export default function Text({ children }: { children: React.ReactNode }) {
    return (
        <p className='my-3'>
            {children}
        </p>
    )
}
