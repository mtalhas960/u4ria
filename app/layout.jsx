import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata = {
  title: 'U4RIA - Wellness App for Mind, Body, and Soul',
  description: 'Discover U4RIA, the ultimate app designed for your mind, body, and soul. Explore meditation, affirmations, gratitude and more to elevate your well-being.',
  keywords: ['wellness app', 'meditation', 'affirmations', 'gratitude', 'U4RIA'],
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'U4RIA - Wellness App for Mind, Body, and Soul',
    description: 'Discover U4RIA, the ultimate app designed for your mind, body, and soul. Explore meditation, affirmations, gratitude and more to elevate your well-being.',
    url: 'https://u4ria.vercel.app/',
    siteName: 'U4RIAHUB',
    images: [
      {
        url: '/u4ria.png',
        width: 800,
        height: 800,
        alt: 'U4RIA',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U4RIA - Wellness App for Mind, Body, and Soul',
    description: 'Discover U4RIA, the ultimate app designed for your mind, body, and soul. Explore meditation, affirmations, gratitude and more to elevate your well-being.',
    site: '@U4riaApp',
    creator: '@U4riaApp',
    images: ['/u4ria.png'],
  },
  alternates: {
    canonical: 'https://u4ria.vercel.app/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
