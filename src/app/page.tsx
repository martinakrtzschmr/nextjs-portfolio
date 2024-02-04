import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';

const skills = [
  {
    name: 'NextJs',
    icon: ArrowDownToLine,
    description:
      "I'm proficient with NextJs, this website is hosted on Vercel.",
  },
  {
    name: 'Angular',
    icon: CheckCircle,
    description:
      'This awesome tool allows for a fast and maintainable code base.',
  },
  {
    name: 'Spring',
    icon: Leaf,
    description: 'A backend framework to grow your digital footprint.',
  },
  {
    name: 'Resume',
    icon: ArrowDownToLine,
    description: 'My resume',
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hello, I'm Martin, a{' '}
            <span className="text-blue-600">Software Developer</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Graduated in digital games, I'm a software developer driven by my
            ambition to create and participate in projects with international
            impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/contact" className={buttonVariants()}>
              Talk to me
            </Link>
            <Button variant="ghost">My projects &rarr;</Button>
          </div>
        </div>

        {/** TODO: List Projects  */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 ls:gap-x-8 lg:gap-y-0">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<skill.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {skill.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
