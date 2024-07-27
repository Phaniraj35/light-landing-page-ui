import { ChildrenWithClassnameType } from "@/types";
import Image, { ImageProps } from "next/image";
import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TestimonialCard = ({ children, className}:ChildrenWithClassnameType) => {
    return (
        <div className={twMerge("card", className)}>
            {children}
        </div>
    );
}

TestimonialCard.Text = Text;
TestimonialCard.Avatar = Avatar;
TestimonialCard.Author = Author;

export default TestimonialCard;

function Text({ children, className }:HtmlHTMLAttributes<HTMLParagraphElement>) {
    return <p className={twMerge('w-full', className)}>
        {children}
    </p>
}

function Avatar({ src, className, ...props }:ImageProps) {
    return (
        <Image 
            src={src}
            className={twMerge('rounded-full', className)}
            {...props}
        />
    );
}

function Author({ children, className}:ChildrenWithClassnameType) {
    return (
        <div className={twMerge('w-full', className)}>
            {children}
        </div>
    );
}
