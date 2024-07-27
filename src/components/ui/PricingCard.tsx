import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type PricingCardProps = {
    children: ReactNode,
    className: string,
}


function PricingCard({ children, className }: PricingCardProps) {
    return (
        <div className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]", className)}>
            {children}
        </div>
    );
}

PricingCard.Header = Header;
PricingCard.Price = Price;
PricingCard.Button = Button;
PricingCard.Features = Features;

type TitleProps = {
    children: ReactNode,
    className?: string
}

function Header({ children, className }: TitleProps) {
    return (
        <div className={twMerge("flex justify-between", className)}>
            {children}
        </div>
    );
}

type PriceType = {
    children: ReactNode,
    className?: string
}

function Price({ children, className }:PriceType) {
    return (
        <div className={twMerge('flex items-baseline gap-1 mt-[30px]', className)}>
            {children}
        </div>
    );
}

type ButtonProps = {
    children: ReactNode,
    className?: string
}

function Button({ children, className}: ButtonProps) {
    return (
        <button className={twMerge('btn btn-primary', className)}>{children}</button>
    );
}

type FeaturesProps = {
    children: ReactNode,
    className?: string
}

function Features({ children, className}: FeaturesProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default PricingCard;
