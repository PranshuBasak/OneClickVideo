import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

const avatarItems = [
  {
    imageSrc: 'https://picsum.photos/id/64/100/100',
    name: 'John Doe',
  },
  {
    imageSrc: 'https://picsum.photos/id/65/100/100',
    name: 'Jane Doe',
  },
  {
    imageSrc: 'https://picsum.photos/id/669/100/100',
    name: 'Alice Doe',
  },
];

export default function SubCTA() {
  return (
    <LandingSaleCtaSection
      title="Revolutionize Your Video Creation"
      descriptionComponent={
        <>
          <p>
          Join millions of creators who are transforming their ideas into stunning videos with One Click Video. Our AI-powered platform makes video creation a breeze, from scriptwriting to editing.
          </p>

          <LandingSocialProof
            className="w-full mt-6"
            showRating
            numberOfUsers={1000}
            suffixText="happy creators"
            avatarItems={avatarItems}
            size="medium"
            disableAnimation={false}
          />
        </>
      }
      ctaHref="/dashboard"
      ctaLabel="Get started in minutes"
    />
  );
}
