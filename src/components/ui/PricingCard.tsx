import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";
import CheckIcon from '@/assets/check.svg';

type PricingCardProps = {
    children: ReactNode,
    inverse: boolean
}


function PricingCard({ children, inverse }: PricingCardProps) {
    return (
        <div className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]", inverse === true && "border-black bg-black text-white")}>
            {children}
        </div>
    );
}

PricingCard.Title = Title;
PricingCard.Price = Price;
PricingCard.Button = Button;
PricingCard.Features = Features;

type TitleProps = {
    title: string,
    popular: boolean,
    inverse: boolean
}

function Title({ title, popular, inverse }: TitleProps) {
    return (
        <div className="flex justify-between">
            <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}>{title}</h3>
            {
                !!popular && (
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium'>
                    Popular
                    </span>
                </div>
                )
            }
        </div>
    );
}

type PriceType = {
    price: number,
    inverse: boolean
}

function Price({ price, inverse}:PriceType) {
    return (
        <div className='flex items-baseline gap-1 mt-[30px]'>
            <span className={twMerge('text-4xl leading-none font-bold text-black tracking-tighter', inverse === true && 'text-white')}>${price}</span>
            <span className={twMerge('tracking-tight font-bold text-black/50', inverse === true && 'text-white/50')}>/month</span>
        </div>
    );
}

type ButtonProps = {
    text: string,
    inverse: Boolean
}

function Button({ text, inverse}: ButtonProps) {
    return (
        <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{text}</button>
    );
}

type Feature = string;

type FeaturesProps = {
    features: Feature[],
    inverse: boolean
}

function Features({ features, inverse}: FeaturesProps) {
    return (
        <ul className={twMerge('flex flex-col mt-8 text-black', inverse === true && 'text-white')}>
                {features.map(feature => (
                  <li key={feature} className='text-small flex items-center gap-4'>
                    <CheckIcon className='h-6 w-6'/>
                    <span>{feature}</span>
                  </li>
                ))}
        </ul>
    );
}

export default PricingCard;
