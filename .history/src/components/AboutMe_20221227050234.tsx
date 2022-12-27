import React from 'react';
import clsx from 'clsx';
import WebDevIcon from '@/Icons/WebDevIcon';
import GraphicDesignIcon from '@/Icons/GraphicDesignIcon';
import ConsultationIcon from '@/Icons/ConsultationIcon';
import { Card } from './Card';
import { Button } from './Button';
import * as gtag from '@/utils/gtag';

const FloatingItems: React.FC<{
  className?: string;
  Icon: JSX.Element;
  title: string;
  subtitle: string;
}> = ({ className, Icon, title, subtitle }) => {
  return (
    <Card className={clsx('px-4 py-6 text-center md:text-left', className)}>
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 dark:bg-600 md:mx-0">
        {Icon}
      </span>

      <span className="mt-6 block text-lg font-semibold text-gray-900 dark:text-gray-50">
        {title}
      </span>
      <p className="text-sm">{subtitle}</p>
    </Card>
  );
};

export const AboutMe = () => {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-sm lg:text-left">
          <h2 className="relative text-3xl font-semibold text-gray-900 dark:text-gray-50">
          A propos
          </h2>
          <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />

          <p className="mt-6 break-words text-lg">
            {`I am a full-stack engineer who creates simple websites with complex functionality. I am currently looking for new opportunities where I can help teams with my skills, If you find me suitable for your project, don't hesitate to contact me.`}
          </p>

          <div className="mt-8">
          
          </div>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-0 xl:-right-20">
          <span className="absolute inset-y-2/4 right-0 -z-10 h-96 max-h-full w-96 max-w-full -translate-y-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/10 blur-2xl" />
          <FloatingItems
            Icon={
              <WebDevIcon className="fill-indigo-600 dark:fill-indigo-50" />
            }
            title="Web Development"
            subtitle="React, Javascript, Wordpress, woocommerce ..."
          />
          <FloatingItems
            Icon={
              <GraphicDesignIcon className="fill-indigo-600 dark:fill-indigo-50" />
            }
            title="Mobile Development"
            subtitle="React native"
            className="lg:relative lg:top-1/2"
          />
          <FloatingItems
            Icon={
              <ConsultationIcon className="fill-indigo-600 dark:fill-indigo-50" />
            }
            title="Consultation"
            subtitle="Help you make smarter decisions in your business ..."
          />
        </div>
      </div>
    </section>
  );
};