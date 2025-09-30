import React from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { CtaSection } from './components/CtaSection';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <CtaSection />
    </>
  );
}