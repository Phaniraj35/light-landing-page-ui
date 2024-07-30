"use client";
import TestimonialCard from "./TestimonialCard";
import React from "react";
import { motion } from 'framer-motion';

type Testimonial = {
    text: string,
    imageSrc: string,
    name: string,
    username: string,
}

type TestimonialColumnProps = {
    testimonials: Testimonial[],
    className?: string,
    duration?: number
} 

export default function ({ testimonials, className, duration = 10 }:TestimonialColumnProps) {
    return (
        <div className={className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                    duration
                }}
                className='flex flex-col gap-6 pb-6'
            >
                {[...new Array(2).fill(0)].map((_,idx) => (
                    <React.Fragment key={idx}>
                        {testimonials.map(testimonial => (
                            <TestimonialCard key={testimonial.username}>

                                <TestimonialCard.Text>
                                    {testimonial.text}
                                </TestimonialCard.Text>
                            

                                <div className="flex items-center gap-2 mt-5">

                                    <TestimonialCard.Avatar 
                                        src={testimonial.imageSrc}
                                        alt={`avatar image of ${testimonial.username}`}
                                        height={40}
                                        width={40}
                                    />

                                    <TestimonialCard.Author className="flex flex-col">
                                        <p className="font-medium tracking-tight leading-5">{testimonial.name}</p>
                                        <p className="leading-5 tracking-tight">{testimonial.username}</p>
                                    </TestimonialCard.Author>

                                </div>

                            </TestimonialCard>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}
