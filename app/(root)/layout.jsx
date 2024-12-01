import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import '@/app/(root)/style.css';


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
