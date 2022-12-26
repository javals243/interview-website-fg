import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiHtml5,
  DiHtml53DEffects,
  DiTerminal,
  DiZend,
} from 'react-icons/di';
import { FaCpanel } from 'react-icons/fa';
import {
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
export const Languages = [
  {
    title: 'HTML',
    icon: <DiHtml5 />,
  },
  {
    title: 'CSS',
    icon: <DiCss3 />,
  },
  {
    title: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript />,
  },
];
export const Frameworks = [
  {
    icon: <SiReact />,
    title: 'React/ React native',
  },
  {
    icon: <SiNextdotjs />,
    title: 'NextJS / NestJS',
  },
  {
    icon: <SiTailwindcss />,
    title: 'Tailwindcss / Styled',
  },
  {
    icon: <SiNextdotjs />,
    title: ' Express JS',
  },
];
export const Tools = [
  {
    icon: <DiGit />,
    title: 'Git',
  },
  {
    icon: <SiGithub />,
    title: 'Github',
  },
  {
    icon: <DiTerminal />,
    title: 'Terminal / Npm',
  },
  {
    icon: <FaCpanel />,
    title: 'cPanel / Yarn',
  },
];
