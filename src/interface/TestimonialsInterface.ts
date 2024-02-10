import React from "react"

export default interface TestimonialsInterface{
    img: string | React.ReactNode,
    name?: string,
    title: string | React.ReactNode,
    description: string | React.ReactNode
    link?: string;
    number?: number;
    
}