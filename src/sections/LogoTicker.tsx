"use client";
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { motion } from 'framer-motion'

export const LogoTicker = () => {
  return (
    <div className='w-full py-8 bg-white'>
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%'
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear'
            }}
          >
            <Image className='logo-ticker-image' src={acmeLogo} alt='acme'/>
            <Image className='logo-ticker-image' src={quantumLogo} alt='quantum'/>
            <Image className='logo-ticker-image' src={echoLogo} alt='echo'/>
            <Image className='logo-ticker-image' src={celestialLogo} alt='celestial'/>
            <Image className='logo-ticker-image' src={pulseLogo} alt='pulse'/>
            <Image className='logo-ticker-image' src={apexLogo} alt='apex'/>

            {/* Duplicate logos for seamless loop */}
            <Image className='logo-ticker-image' src={acmeLogo} alt='acme'/>
            <Image className='logo-ticker-image' src={quantumLogo} alt='quantum'/>
            <Image className='logo-ticker-image' src={echoLogo} alt='echo'/>
            <Image className='logo-ticker-image' src={celestialLogo} alt='celestial'/>
            <Image className='logo-ticker-image' src={pulseLogo} alt='pulse'/>
            <Image className='logo-ticker-image' src={apexLogo} alt='apex'/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
