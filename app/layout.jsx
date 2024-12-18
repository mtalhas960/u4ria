import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'easymde/dist/easymde.min.css'
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const amsterdam = localFont({
  src: "./fonts/amsterdam.ttf",
  variable: "--font-amsterdam",
  weight: "100 900",
});

const metropolis = localFont({
  src: [
    {
      path: "./fonts/Metropolis/Metropolis-ExtraBold.woff",
      weight: "800 900",
    },
    {
      path: "./fonts/Metropolis/Metropolis-Bold.woff",
      weight: "600 700",
    },
    {
      path: "./fonts/Metropolis/Metropolis-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/Metropolis/Metropolis-Regular.woff",
      weight: "100 400",
    },
  ],
  variable: "--font-metropolis",
});

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U4RIA - Wellness App for Mind, Body, and Soul',
    description: 'Discover U4RIA, the ultimate app designed for your mind, body, and soul. Explore meditation, affirmations, gratitude and more to elevate your well-being.',
    site: '@U4riaApp',
    creator: '@U4riaApp',
  },
  alternates: {
    canonical: 'https://u4ria.vercel.app/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${amsterdam.variable} ${metropolis.variable}`}>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
