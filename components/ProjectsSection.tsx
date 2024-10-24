import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'To Do List',
    description:
      'A to-do list is a tool for planning a list of tasks or activities that you need to complete within a specific timeframe.',
    image: '/todol.png',
    github: 'https://github.com/Hibyyy/todol',
    link: 'https://hibyyy.github.io/todol/',
  },
  {
    name: 'Knight Ghibli',
    description: 'idle game play, a knight adventure with a ghibli feel.',
    image: '/knight.png',
    link: 'https://hibyyy.itch.io/knightghibli',
  },
  {
    name: 'Flappy Bird',
    description:
      'Guide the little bird through endless pipes! Tap to fly, avoid obstacles, and challenge your friends to beat your high score. Simple to play, hard to master—how far can you go?',
    image: '/bird.jpg',
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className='md:w-1/2'>
                    {project.link ? (
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=''
                          width={1000}
                          height={1000}
                          className='rounded-xl shadow-xl hover:opacity-70'
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    )}
                  </div>
                  <div className='mt-8 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4'>
                      {project.github && (
                        <Link href={project.github} target='_blank'>
                          <BsGithub
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target='_blank'>
                          <BsArrowUpRightSquare
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
