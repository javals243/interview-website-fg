import React from 'react';
import Image from 'next/image';
import { widontString } from '@/utils/widontString';
import SEO from '@/components/SEO';
import Container from '@/layouts/Container';
import { Button } from '@/components/Button';
import Tag from '@/components/Tag';
import GithubIcon from '@/Icons/GithubIcon';
import YoutubeIcon from '@/Icons/YoutubeIcon';
import ExternalLinkIcon from '@/Icons/ExternalLinkIcon';
import projectsList from '@/data/projects';
import { substringText } from '@/utils';

let reversedList = projectsList.reverse();

export default function Programmes() {
  return (
    <>
      <SEO
        title="Projects – Valere Chihisa"
        description="Some of my public / personal projects."
      />

      <Container>
        <div className="mx-auto w-full max-w-screen-sm">
          <div className="space-y-4 pb-8 sm:text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
              Blog
            </h1>
            <h1 className="customTitle">Derniers Articles</h1>
            <p className="leading text-1xl desktop:mx-20 mx-10 mb-10 text-center text-xl">
              Découvrez ici les derniers articles
            </p>

            <div></div>
          </div>
          <ul className="space-y-8">
            {reversedList.map((project) => (
              <li key={project.id}>
                <article className="group flex flex-col overflow-hidden rounded-2xl border-slate-200 bg-gray-200 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:saturate-100 dark:border-slate-700 dark:bg-gray-500">
                  <Image
                    src={project.thumbnail}
                    alt="project screenshot"
                    width={1280}
                    height={720}
                    className="saturate-50 transition-all duration-300 group-hover:scale-[1.02] group-hover:saturate-100"
                  />
                  <footer className="relative space-y-2 bg-white p-3 dark:bg-slate-800">
                    <div className="flex space-x-2"></div>
                    <a className="inline-block" href={project.github}>
                      <h3
                        className="text-sm font-semibold text-gray-900 dark:text-gray-50 md:text-base"
                        title={project.title}
                      >
                        {project.title}
                      </h3>
                    </a>
                    <div className="mb-1 min-h-[5rem] text-sm font-light">
                      {substringText(project?.desciption)}
                    </div>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
