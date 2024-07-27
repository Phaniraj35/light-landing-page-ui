import { ChildrenWithClassnameType } from "@/types";
import { twMerge } from "tailwind-merge";

function PricingCard({ children, className }: ChildrenWithClassnameType) {
    return (
        <div className={twMerge("card", className)}>
            {children}
        </div>
    );
}

PricingCard.Header = Header;
PricingCard.Price = Price;
PricingCard.Button = Button;
PricingCard.Features = Features;


function Header({ children, className }: ChildrenWithClassnameType) {
    return (
        <div className={twMerge("flex justify-between", className)}>
            {children}
        </div>
    );
}


function Price({ children, className }:ChildrenWithClassnameType) {
    return (
        <div className={twMerge('flex items-baseline gap-1 mt-[30px]', className)}>
            {children}
        </div>
    );
}


function Button({ children, className}: ChildrenWithClassnameType) {
    return (
        <button className={twMerge('btn btn-primary', className)}>{children}</button>
    );
}


function Features({ children, className}: ChildrenWithClassnameType) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default PricingCard;
