import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export default function FAQ() {
  return (
    <LandingFaqCollapsibleSection
      title="Frequently Asked Questions"
      description="Get answers to your questions about One Click Video."
      faqItems={[
        {
          question: "How does One Click Video work?",
          answer: "Simply input your custom prompt or select from preconfigured topics, select your desired image style, select video duration and let our AI generate stunning videos. It's that easy!"
        },
        {
          question: "What kind of videos can I create with One Click Video?",
          answer: "You can create a wide range of videos, including explainer videos, social media ads, product demos, and more."
        },
        {
          question: "Do I need any technical skills to use One Click Video?",
          answer: "No technical skills are required. Our user-friendly interface makes it easy for anyone to create professional-quality videos."
        },
        {
          question: "How long does it take to generate a video?",
          answer: "Video generation time varies depending on the length and complexity of your prompt, but it's typically very fast approx. 1 minute for shorter prompts and 2-5 minutes for longer prompts."
        },
        {
          question: "Can I customize the generated videos?",
          answer: "Yes, you can customize the generated videos by adjusting the style, length, and other parameters."
        },
        {
          question: "How much does One Click Video cost?",
          answer: "We offer a credit system , by default u will get 3 credit , and each video cost one credit , for pro u can buy 10 cedit for 100 rupess as many times as u want."
        },
        {
          question: "What kind of support is available?",
          answer: "We offer excellent customer support through email and live chat. Our team is always ready to assist you with any questions or issues. Contact us at https://www.linkedin.com/in/pranshubasak/"
        },
        {
          question: "Is my data safe and secure?",
          answer: "Yes, we prioritize data security and privacy. Your data is encrypted and protected at all times."
        },
        {
          question: "Can I use One Click Video for commercial purposes?",
          answer: "Yes, you can use One Click Video for commercial purposes. Please refer to our terms of service for more information. Contact us at https://www.linkedin.com/in/pranshubasak/"
        },
        {
          question: "What if I'm not satisfied with the results?",
          answer: "We offer a satisfaction guarantee. If you're not happy with the results, please contact our support team for assistance. Contact us at https://www.linkedin.com/in/pranshubasak/"
        },
      ]}
      withBackground
    />
  );
}