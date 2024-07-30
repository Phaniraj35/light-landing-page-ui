"use client";
import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const productShowcaseSectionRef = useRef<null|HTMLElement>(null);

  const { scrollYProgress } =  useScroll({
    target: productShowcaseSectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0,1], [-150, 150]);

  return (
    <section ref={productShowcaseSectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">

        <div className="flex justify-center">
          <div className='tag'>Boost your productivity</div>
        </div>

        <h2 
          className='section-title mt-5'
        >
          A more efficient way to track progress
        </h2>

        <p className='section-description mt-5'>Efforlessly transform your ideas into a fully functional, responsive SaaS website in just minutes with this template.</p>

        <div className="relative">
          <Image 
            src={productImage}
            alt='product image'
            className='mt-10'
          />

          <motion.img
            src={pyramidImage.src}
            className='hidden md:block md:absolute md:-right-36 md:-top-20'
            height={262}
            width={262}
            alt='pyramid graphic'
            style={{ translateY }}
          />

          <motion.img 
            src={tubeImage.src}
            alt='tube graphic'
            height={248}
            width={248}
            className='hidden md:block md:absolute md:bottom-24 md:-left-36'
            style={{ translateY }}
          />
        </div>

      </div>
    </section>
  );
};
