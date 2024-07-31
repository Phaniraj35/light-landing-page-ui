"use client";
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { motion } from 'framer-motion'

const logos = [
  acmeLogo,
  quantumLogo,
  echoLogo,
  celestialLogo,
  pulseLogo,
  apexLogo,
]

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
            {logos.concat(logos).map((logo,idx) => (
              <Image
                src={logo}
                alt={`logo ${idx+1}`}
                className='h-8 w-auto'
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
