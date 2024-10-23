import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'Excel' },
  { skill: 'Python' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
];

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              Hello, my name is Habibie and I am a student who take a major{' '}
              <span className='font-bold'>{'Software'}</span>,
              <span className='font-bold'>{' and Game Development'}</span>.
            </p>
            <br />
            <p>I study at Vocational High School 21 Jakarta, Indonesia.</p>
            <br />
            <p>
              I am a person who has a great interest in computers, I regularly
              improved my skills. so that it can be useful in the professional
              world
            </p>
            <br />
            <p>
              As a student of{' '}
              <span className='font-bold text-teal-500'>
                Software, and Game Development
              </span>{' '}
              I believe that technology is not just about code but about
              creating meaningful solutions that continue to evolve over time.
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
            <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src='/giyu.png'
              alt=''
              width={325}
              height={325}
              className='hidden md:block md:relative md:bottom-4 md:left-32 md:z-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
