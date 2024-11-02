import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';

export default function Testimonial() {
  const testimonialItems = [
    {
      name: 'Emily Green',
      text: 'One Click Video has revolutionized my content creation process. It\'s so easy to  generate high-quality videos without any editing skills!',
      handle: '@emilyplants',
      imageSrc: 'https://picsum.photos/100/100.webp?random=7',
    },
    {
      name: 'Michael Bloom',
      text: 'I\'m blown away by the versatility of One Click Video. From creating engaging social media posts to producing professional explainer videos, this tool has it all. The AI-generated scripts are surprisingly accurate and insightful.',
      handle: '@bloomingmichael',
      imageSrc: 'https://picsum.photos/100/100.webp?random=8',
    },
    {
      name: 'Sarah Ivy',
      text: 'With One Click Video, I can create engaging product demos in minutes. It\'s a game-changer for my marketing efforts.',
      handle: '@sarahlovesplants',
      imageSrc: 'https://picsum.photos/100/100.webp?random=9',
      featured: true, // Feature this testimonial
    },
    {
      name: 'Jake Stone',
      text: 'The best AI tool for quick video production.',
      handle: '@jakestone',
      imageSrc: 'https://picsum.photos/100/100.webp?random=10',
    },
    {
      name: 'Lily Forrest',
      text: 'I\'ve tried other AI video generators, but none of them compare to One Click Video. The quality of the output is consistently high, and the user experience is seamless. I highly recommend it to anyone looking to streamline their video production process.',
      handle: '@lilyforrest',
      imageSrc: 'https://picsum.photos/100/100.webp?random=11',
    },
    {
      name: 'Chris Fields',
      text: 'The variety of templates and styles is amazing.',
      handle: '@chrisfields',
      imageSrc: 'https://picsum.photos/100/100.webp?random=12',
    },
  ];

  return (
    <LandingTestimonialReadMoreWrapper size="md">
      <LandingTestimonialGrid
        title="Creators love One Click Video"
        description="See what our community of 1000s of Content Creators have to say about One Click Video."
        testimonialItems={testimonialItems}
      />
    </LandingTestimonialReadMoreWrapper>
  );
}
