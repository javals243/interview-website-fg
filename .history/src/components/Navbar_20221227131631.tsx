import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '../images/nine.png';
import { useRouter } from 'next/router';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ThemeToggle } from './ThemeToggle';
import GithubIcon from '@/Icons/GithubIcon';

import Image from 'next/image';

const navItems = [
  {
    title: 'Accueil',
    path: '/',
  },
  {
    title: 'Apropos',
    path: '/#about',
  },
  {
    title: 'Services',
    path: '/projects/#top',
  },
  {
    title: 'Blog',
    path: '/#contact-me',
  },
  
  {
    title: 'Contact',
    path: '/#contact-me',
  },
];

export const Navbar = () => {
     const [dropdownOpen, setdropdownOpen] = useState(false);
  const [isStiky, setIsSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isStiky && window.scrollY > offset) {
        setIsSticky(true);
      } else if (isStiky && window.scrollY <= offset) {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isStiky]);

  return (
    <div
      id="navbar"
      className={clsx(
        'fixed inset-x-0 top-0 z-40 h-16 transition-colors duration-300',
        isStiky || router.asPath !== '/'
          ? 'border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
          : 'bg-transparent text-white'
      )}
    >
      <div className="mx-auto max-w-screen-2xl py-4 px-4 md:px-8">
        <div className="relative flex items-center">
          <Link href={"/"} passHref>
            <span
              className="flex h-full w-[100px] items-center
              "
            >
              <Image className="h-full w-full bg-inherit" src={Logo} alt="" />
            </span>
          </Link>

          <div className="relative ml-auto items-center md:flex">
            <nav className="hidden font-semibold leading-6  dark:text-gray-200 md:block">
              <ul className="flex space-x-10">
                <li className="relative">
                  <Link href={'/'}>
                    <a
                      className={clsx(
                        'peer transition-all duration-150 hover:text-indigo-500',
                        router.asPath === '/' ? 'text-indigo-500' : ''
                      )}
                    >
                      {'Accueil'}
                    </a>
                  </Link>
                  <span
                    className={clsx(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-black transition-all duration-150 peer-hover:scale-x-100',
                      router.asPath === '/' ? 'scale-x-100' : ''
                    )}
                  />
                </li>
                <li className="relative">
                  <Link href={'/#about'}>
                    <a
                      className={clsx(
                        'peer transition-all duration-150 hover:text-indigo-500',
                        router.asPath === '/#about' ? 'text-indigo-500' : ''
                      )}
                    >
                      {'Apropos'}
                    </a>
                  </Link>
                  <span
                    className={clsx(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-black transition-all duration-150 peer-hover:scale-x-100',
                      router.asPath === '/#about' ? 'scale-x-100' : ''
                    )}
                  />
                </li>
                <li className="relative">
                  <Link href={'/#services'}>
                    <a
                      className={clsx(
                        'peer transition-all duration-150 hover:text-indigo-500',
                        router.asPath === '/#services' ? 'text-indigo-500' : ''
                      )}
                    >
                      {'Services'}
                    </a>
                  </Link>
                  <span
                    className={clsx(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-black transition-all duration-150 peer-hover:scale-x-100',
                      router.asPath === '/projects/#top' ? 'scale-x-100' : ''
                    )}
                  />
                </li>
                <li className="relative">
                  <Link href={'/projects#top'}>
                    <a
                      className={clsx(
                        'peer transition-all duration-150 hover:text-indigo-500',
                        router.asPath === '/projects#top'
                          ? 'text-indigo-500'
                          : ''
                      )}
                    >
                      {'Blog'}
                    </a>
                  </Link>
                  <span
                    className={clsx(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-black transition-all duration-150 peer-hover:scale-x-100',
                      router.asPath === '/#contact-me' ? 'scale-x-100' : ''
                    )}
                  />
                </li>

                <li className="relative">
                  <Link href={'/#contact-me'}>
                    <a
                      className={clsx(
                        'peer transition-all duration-150 hover:text-indigo-500',
                        router.asPath === '/#contact-me'
                          ? 'text-indigo-500'
                          : ''
                      )}
                    >
                      {'Contact'}
                    </a>
                  </Link>
                  <span
                    className={clsx(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-black transition-all duration-150 peer-hover:scale-x-100',
                      router.asPath === '/#contact-me' ? 'scale-x-100' : ''
                    )}
                  />
                </li>
                <Menu as="li" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm   outline-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <button>Programmes</button>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item
                        onClick={() => {
                          <Link href={'/programmes'}></Link>;
                        }}
                      >
                        {({ active }) => (
                          <a
                           
                            className={'block px-4 py-2 text-sm text-gray-700'}
                          >
                            Programme 1
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Programme 2
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={'block px-4 py-2 text-sm text-gray-700'}
                          >
                            Programme 3
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </ul>
            </nav>

            <div className="flex items-center space-x-4 pl-6 md:space-x-6">
              <a
                href="https://github.com/javals243"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

