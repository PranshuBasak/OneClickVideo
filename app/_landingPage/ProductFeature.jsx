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
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording%202024-11-02%20183515.mp4?alt=media&token=c33b9666-9a2c-44b2-96ae-0a15a8d31800"
      />

      <LandingProductVideoFeature
        title="Bite-Sized History Lessons"
        description="Before: A historical event. After: A visually narrated story with animations, dates, and locations, helping viewers dive into history without a script."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording%202024-11-02%20183730.mp4?alt=media&token=89548911-0f48-4567-88d4-183bfb3f17dc"
      />

      <LandingProductVideoFeature
        title="Eye-Catching Ad Campaign Video"
        description="Before: A basic concept. After: A fully produced advertisement video with custom art style and audio, ready to capture audiences across platforms."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording%202024-11-02%20183847.mp4?alt=media&token=5fb770a8-c9e3-4c4a-9a43-f3f1f0df14af"
      />

      <LandingProductVideoFeature
        title="Science Explainer Video"
        description="Before: A scientific concept. After: A mini-explainer video with animations and step-by-step breakdowns, turning complex topics into clear, digestible content."
        autoPlay={false}
        variant="secondary"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/tutorial-video%2FRecording_2024-11-02_184026%5B1%5D.mp4?alt=media&token=e109adbf-3997-49ab-86f1-ff20132e7747"
      />
    </LandingProductFeaturesGrid>
  );
}
