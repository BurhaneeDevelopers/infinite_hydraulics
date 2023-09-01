import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Infinite Hydraulics Solutions | Leading Hydraulic Solution provider in Chennai | Best Hydraulic Solution provider in Chennai",
  description:
    "Your Trusted Hydraulic Solutions Provider | High-Quality Hoses, Fittings & More | Experts in Fluid Power Technology | Serving Chennai",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <link
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />
          {/* <link rel="shortcut icon" href="/Logo.png" type="image/x-icon" sizes="16x16" /> */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon//site.webmanifest" />
          <Navbar />
          {children}
          <Footer />
          <script
            src="https://kit.fontawesome.com/4647efb575.js"
            crossorigin="anonymous"
            async
          />
          <script async src="https://unpkg.com/swiper/swiper-bundle.min.js" />
        </body>
      </html>
    </>
  );
}
