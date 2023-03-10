import React from 'react';
import EmailIcon from '@/Icons/EmailIcon';
import InstagramIcon from '@/Icons/InstagramIcon';
import LinkedinIcon from '@/Icons/LinkedinIcon';

import TwitterIcon from '@/Icons/TwitterIcon';

const socialLinks = [
  {
    lable: 'twitter profile',
    Icon: <TwitterIcon />,
    href: 'https://twitter.com/valere_chihisa',
  },
  {
    lable: 'email address',
    Icon: <EmailIcon />,
    href: 'mailto:vchihisa@gmail.com',
  },
  {
    lable: 'linkedin profile',
    Icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/chihisa-valere-360544182/',
  },
  {
    lable: 'instagram',
    Icon: <InstagramIcon />,
    href: 'https://www.instagram.com/vvchihisa/',
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between space-y-4 py-4 px-4 sm:flex-row sm:space-y-0 md:px-8">
        <div>
          <p className="text-right text-sm">
            Copyright &copy; {new Date().getFullYear()} New website
          </p>
        </div>
        <ul className="flex items-center justify-center space-x-4">
          {socialLinks.map((link) => (
            <li key={link.lable}>
              <a
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400"
              >
                <span className="sr-only">{link.lable}</span>
                {link.Icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
