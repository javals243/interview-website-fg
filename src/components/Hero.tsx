import React from 'react';
import Image from 'next/image';
import useTypingText from '@/hooks/useTypingText';

const Hero: React.FC = () => {
  const { typingText } = useTypingText(
    'I am a full stack web developer with a passion for creating beautiful and intuitive websites and web applications.',
    100,
    1000
  );
  return (
    <div className="relative h-[96vh] w-full sm:h-[55vh] md:h-[96vh]">
      <section id="hero">
      
      </section>
    </div>
  );
};

export default Hero;
