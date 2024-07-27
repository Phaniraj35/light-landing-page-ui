import { twMerge } from "tailwind-merge";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
    text: string,
    imageSrc: string,
    name: string,
    username: string,
}

type TestimonialColumnProps = {
    testimonials: Testimonial[],
    className?: string 
} 

export default function ({ testimonials, className }:TestimonialColumnProps) {
    return (
        <div className={twMerge('flex flex-col mt-5 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]', className)}>
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
        </div>
    );
}
