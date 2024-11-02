
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import {Poppins,Hind, Montserrat} from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";

const baseFont = Hind({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-default',
  weight: ['400', '600']
});

const displayFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-display'
});
const poppin = Poppins({
  subsets:['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      }
    ]
  },
  manifest: '/site.webmanifest',
  title: "One Click Video",
  description: "OneClickVideo is an AI-powered video generator designed to simplify the process of creating stunning videos in just one click. Whether you're a content creator, marketer, or small business owner, OneClickVideo provides an intuitive platform where you can transform a simple text prompt into a fully produced video. With support for various art styles, dynamic audio integration, and seamless video stitching, OneClickVideo offers a quick and automated solution to your video creation needs.",
};



export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${baseFont.variable} ${displayFont.variable}`}>
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
