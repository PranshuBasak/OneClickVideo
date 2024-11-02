import React from 'react';
import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { Button } from '@/components/shared/ui/button';
import { colors } from '@/data/config/colors';



const MainCTASection = () => {
  const avatarItems = [
    {
      imageSrc: '/api/placeholder/100/100',
      name: 'John Doe',
    },
    {
      imageSrc: '/api/placeholder/100/100',
      name: 'Jane Doe',
    },
    {
      imageSrc: '/api/placeholder/100/100',
      name: 'Alice Doe',
    },
  ];

  return (
    <div className="relative">
      <LandingPrimaryVideoCtaSection
        title="One Click, Endless Creativity!"
        description="Simply set your topic, style and duration, and let AI do the rest."
        autoPlay
        controls={false}
        textPosition="center"
        videoPosition="center"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FOne%20Click%20Video.mp4?alt=media&token=bd3bc618-2cd3-4f09-b7d5-e97b6d1ec7f6"
        withBackground={true}
        variant="secondary"
        leadingComponent={
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" height={50} width={50}/>
          </div>
        }
      >
        <div className="w-full mt-6 flex flex-col justify-center gap-4">
          <Button size="xl" className="p-7 text-xl bg-red-400 hover:bg-red-500" variant="secondary" asChild>
            <a href="/dashboard">Try One Click Video for free</a>
          </Button>
          <p className="text-sm opacity-50">No credit card required</p>
        </div>
      </LandingPrimaryVideoCtaSection>

      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            ` <svg xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a" cx="50%" cy="56.6%" r="50%" fx="50%" fy="56.6%" gradientUnits="userSpaceOnUse"><stop offset="0%" style="stop-color:#dc2626;stop-opacity:.3"/><stop offset="54.99%" style="stop-color:#b91c1c;stop-opacity:.1"/><stop offset="100%" style="stop-color:#d97706;stop-opacity:.1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`,
          )}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
    </div>
  );
};

export default MainCTASection;