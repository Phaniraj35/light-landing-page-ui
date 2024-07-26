import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">

        <div className="flex justify-center">
          <div className='tag'>Boost your productivity</div>
        </div>

        <h2 
          className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5'
        >
          A more efficient way to track progress
        </h2>

        <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>Efforlessly transform your ideas into a fully functional, responsive SaaS website in just minutes with this template.</p>

        <div className="relative">
          <Image 
            src={productImage}
            alt='product image'
            className='mt-10'
          />

          <Image 
            src={pyramidImage}
            className='hidden md:block md:absolute md:-right-36 md:-top-20'
            height={262}
            alt='pyramid graphic'
          />

          <Image 
            src={tubeImage}
            alt='tube graphic'
            height={248}
            className='hidden md:block md:absolute md:bottom-24 md:-left-36'
          />
        </div>

      </div>
    </section>
  );
};
