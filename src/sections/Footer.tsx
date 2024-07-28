import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialYt from '@/assets/social-youtube.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';

export const Footer = ():JSX.Element => {
  return (
    <footer className='py-10 bg-black text-[#BCBCBC] text-sm text-center'>
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-y-6">
          <div className="inline-flex relative before:content-[''] before:h-full before:w-full before:absolute before:bg-gradient-to-r before:from-[#F87BFF] before:via-[#FB92CF] before:via-[#FFDD9B] before:via-[#C2F0B1] before:to-[#2FD8FE]  before:blur">
            <Image src={Logo} alt='Logo image' height={40} width={40} className='relative' />
          </div>

          <nav className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
          </nav>

          <div className='flex gap-x-2'>
            <SocialX />
            <SocialInsta />
            <SocialLinkedIn />
            <SocialYt />
            <SocialPin />
          </div>

          <p>&copy; 2024 Your Company Inc. All rights reserved</p>

        </div>
      </div>
    </footer>
  );
};
