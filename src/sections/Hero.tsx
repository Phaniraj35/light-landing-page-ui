import ArrowRight from '@/assets/arrow-right.svg';
import CogImage from '@/assets/cog.png';
import Image from 'next/image';
import CylinderImgae from '@/assets/cylinder.png';
import NoodleImage from '@/assets/noodle.png';

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] w-full overflow-x-clip">
      <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="left">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>

          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
          >
            Pathway to productivity
          </h1>

          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts and celebrate your success.
          </p>

          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1 flex items-center">
              <span>Learn more</span>
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        </div>

        <div className="right mt-20 w-full h-full md:mt-0 relative">
          <Image 
            src={CogImage} 
            alt='cog graphic'
            className='md:h-full relative'
            // className='md:absolute md:h-full object-contain md:-bottom-[20%] md:-right-[50%]' 
          />
          <Image 
            src={CylinderImgae} 
            alt='cylinder graphic' 
            height={220} 
            width={220} 
            className='hidden lg:block lg:absolute lg:-top-12 lg:-left-40' 
          />

          <Image 
            src={NoodleImage}
            alt='noodle graphic'
            width={220}
            className='hidden lg:block lg:absolute lg:-bottom-12 lg:-right-36 rotate-[30deg]'
          />
        </div>
    </div>
    </section>
  );
};
