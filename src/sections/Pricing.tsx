import { PricingCard } from '@/components/ui';

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
    <section className="py-24">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">Free forever, upgrade for unlimited tasks, better security and exclusive features.</p>

        <div className='flex flex-col gap-6 items-center lg:flex-row lg:gap-x-4 lg:items-end lg:justify-center mt-10'>
          {pricingTiers.map(tier => (
            <PricingCard key={tier.title} inverse={tier.inverse}>

              <PricingCard.Title inverse={tier.inverse} popular={tier.popular} title={tier.title} />

              <PricingCard.Price inverse={tier.inverse} price={tier.monthlyPrice} />

              <PricingCard.Button inverse={tier.inverse} text={tier.buttonText}/>

              <PricingCard.Features inverse={tier.inverse} features={tier.features} />

            </PricingCard>
          ))}
        </div>
      
      </div> 
    </section>
  );
};
