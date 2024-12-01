import Hero from '@/components/sections/Hero';
import JoinUs from '@/components/sections/JoinUs';
import Welcome from '@/components/sections/Welcome';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';
import Partnership from '@/components/sections/Partnership';
import Slogan from '@/components/sections/Slogan';

export default function Home() {
  const Music = "1871392895";
  const Affirmation = "1871389823";
  const Meditation = "1871340443";
  return (
    <>
      <Hero />
      <JoinUs />
      <Welcome />
      <Features />
      <CTA />
      <Partnership />
      <Slogan />
    </>
  );
}
