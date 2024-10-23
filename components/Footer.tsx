import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='w-full'>
      {/* Garis penuh dari ujung ke ujung */}
      <hr className='w-full h-0.5 bg-neutral-200 border-0 mt-8' />
      
      <div className='w-full px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-center text-neutral-900 dark:text-neutral-100 p-4'>
        {/* Copyright di kiri */}
        <div className='text-neutral-500 dark:text-neutral-100'>
          © 2024 Ahmad Habibie Arrouf
        </div>

        {/* Ikon sosial di kanan */}
        <div className='flex flex-row items-center space-x-4 mt-4 md:mt-0'>
          <a href='https://github.com/hibyyy' rel='noreferrer' target='_blank'>
            <AiOutlineGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/ahmad-habibie-arrouf-a93156309/'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
          <a
            href='https://www.youtube.com/@arbie20'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineYoutube
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
