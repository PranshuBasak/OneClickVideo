import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';

export default function ProductFeature() {
  return (
    <LandingProductFeaturesGrid
      title="Bring Stories to Life Instantly"
      description="Unleash the power of storytelling. OneClickVideo turns ideas into captivating videos, weaving narrative and visual magic without the need for a script."
      withBackground={false}
      variant="secondary"
    >
      <LandingProductVideoFeature
        title="Dynamic Social Media Promo"
        description="Before: A simple prompt. After: A captivating, professionally styled promo video tailored for social media engagement, complete with dynamic audio and visual flair."
        autoPlay={false}
        variant="primary"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording%202024-11-02%20183515.mp4?alt=media&token=ea1ca40b-bb58-4032-b4ee-3526bcf0b87d"
      />

      <LandingProductVideoFeature
        title="Bite-Sized History Lessons"
        description="Before: A historical event. After: A visually narrated story with animations, dates, and locations, helping viewers dive into history without a script."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording%202024-11-02%20183730.mp4?alt=media&token=d489be79-b464-4237-b653-0eb68a69b025"
      />

      <LandingProductVideoFeature
        title="Eye-Catching Ad Campaign Video"
        description="Before: A basic concept. After: A fully produced advertisement video with custom art style and audio, ready to capture audiences across platforms."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording%202024-11-02%20183847.mp4?alt=media&token=49115360-b171-4a9c-a987-b7e1e4fe1e45"
      />

      <LandingProductVideoFeature
        title="Science Explainer Video"
        description="Before: A scientific concept. After: A mini-explainer video with animations and step-by-step breakdowns, turning complex topics into clear, digestible content."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording%202024-11-02%20184026.mp4?alt=media&token=56bd6ed1-c934-4fbe-bec8-60aef72ad218"
      />
    </LandingProductFeaturesGrid>
  );
}
