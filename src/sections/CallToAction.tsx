import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section className='bg-gradient-to-b from-white to-[#D2DCFF] pb-5 overflow-x-clip '>
      <div className="container relative">
      <h2 className="section-title">Sign up for free today</h2>

      <div className="container relative">
        <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <Image 
          src={starImage}
          alt='star graphic'
          width={120}
          className='hidden md:block absolute -top-28 -left-10'
        />
      </div>

      <Image 
        src={springImage}
        alt='spring graphic'
        width={120}
        className='hidden md:block absolute right-10'
      />

      <div className="flex justify-center gap-2 items-center mt-10">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1 flex items-center">
          <span>Learn more</span>
          <ArrowRight className='w-5 h-5' />
        </button>
      </div>

      </div>
    </section>
  );
};
