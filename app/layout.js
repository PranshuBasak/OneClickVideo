
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import {Poppins} from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";


const poppin = Poppins({
  subsets:['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: "One Click Video",
  description: "OneClickVideo is an AI-powered video generator designed to simplify the process of creating stunning videos in just one click. Whether you're a content creator, marketer, or small business owner, OneClickVideo provides an intuitive platform where you can transform a simple text prompt into a fully produced video. With support for various art styles, dynamic audio integration, and seamless video stitching, OneClickVideo offers a quick and automated solution to your video creation needs.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={poppin.className}
        >
          <Provider>
            {children}
          </Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
