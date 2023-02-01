import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Arturo Villalobos Jr
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Engineer | Data Scientist | Aspiring Designer
                <br/>
                <span className="font-semibold">Houston, TX</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Freelance Developer helping businesses meet their goals through hardwork, collaboration, and a shared interest in improving customer experiences.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Arturo Villalobos"
                height={176}
                width={176}
                src="/headshot.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Contact
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
                If you have a business problem, an idea, or just want to get an opinion I would love to hear from you! 
          </p>
          <Link
            href="https://www.linkedin.com/in/rtvro/"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'LinkedIn'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>
          <Link
            href="mailto: tembevilla@gmail.com"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Email'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>
          <Link
            href="tel: 432-312-5912"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Phone'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            About Me
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I am a chicano developer from Texas with a passion for web development, data science, and graphic design. 
            I have helped businesses from various industries to improve their products and services by providing professional and prompt development services. 
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            As a Texas A&M former student, I constantly strive to integrate the core values of 
            respect, excellence, integrity, and selfless service into my professional work and business relationships. If this sounds good to you, shoot me a message and take the first step in solving your problem.
          </p>
          
          
        </div>
      </Container>
    </Suspense>
  );
}
