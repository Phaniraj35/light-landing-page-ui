import { PricingCard } from '@/components/ui';
import { twMerge } from 'tailwind-merge';
import CheckIcon from '@/assets/check.svg';


const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">Free forever, upgrade for unlimited tasks, better security and exclusive features.</p>

        <div className='flex flex-col gap-6 items-center lg:flex-row lg:gap-x-4 lg:items-end lg:justify-center mt-10'>
          {pricingTiers.map(tier => (
            <PricingCard key={tier.title} className={tier.inverse === true ? "border-black bg-black text-white" : ''}>

              <PricingCard.Header>
                <h3 className={twMerge("text-lg font-bold text-black/50", tier.inverse === true && "text-white/60")}>{tier.title}</h3>
                {
                    !!tier.popular && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                          <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium'>
                            Popular
                          </span>
                      </div>
                    )
                }
              </PricingCard.Header>

              <PricingCard.Price>
                <span className={twMerge('text-4xl leading-none font-bold text-black tracking-tighter', tier.inverse === true && 'text-white')}>${tier.monthlyPrice}</span>
                <span className={twMerge('tracking-tight font-bold text-black/50', tier.inverse === true && 'text-white/50')}>/month</span>
              </PricingCard.Price>

              <PricingCard.Button className={`w-full mt-[30px] ${tier.inverse === true && 'bg-white text-black'}`} >
                {tier.buttonText}
              </PricingCard.Button>

              <PricingCard.Features className='mt-8'>
                <ul className={twMerge('flex flex-col text-black', tier.inverse === true && 'text-white')}>
                  {tier.features.map(feature => (
                    <li key={feature} className='text-small flex items-center gap-4'>
                      <CheckIcon className='h-6 w-6'/>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </PricingCard.Features>

            </PricingCard>
          ))}
        </div>
      
      </div> 
    </section>
  );
};
