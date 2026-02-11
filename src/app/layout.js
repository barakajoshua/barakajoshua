import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import SnowfallComponent from "./components/SnowfallComponent";
import { StructuredData } from "./components/StructuredData";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { Preloader } from "./components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baraka Joshua - Full Stack Developer | Web & Mobile Development",
  description: "Baraka Joshua is a passionate full-stack developer specializing in responsive web applications, mobile development, and UI/UX design. Expert in React, Node.js, Flutter, and more.",
  keywords: ["Baraka Joshua", "Joshua Baraka", "brk", "josh", "baraka", "jsh", "full stack developer", "web developer", "mobile developer", "React developer", "Node.js developer", "UI/UX design", "web design", "frontend developer", "backend developer"],
  authors: [{ name: "Baraka Joshua", url: "https://barakajoshua.com" }],
  creator: "Baraka Joshua",
  publisher: "Baraka Joshua",
  applicationName: "Baraka Joshua Portfolio",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barakajoshua.com",
    siteName: "Baraka Joshua - Full Stack Developer",
    title: "Baraka Joshua - Full Stack Developer | Web & Mobile Development",
    description: "Baraka Joshua is a passionate full-stack developer specializing in responsive web applications, mobile development, and UI/UX design.",
    images: [
      {
        url: "https://barakajoshua.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baraka Joshua - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraka Joshua - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, Flutter, and modern web technologies.",
    images: ["https://barakajoshua.com/og-image.png"],
    creator: "@barakajoshua",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a192f" />
        <link rel="canonical" href="https://barakajoshua.com" />
        <link rel="alternate" hrefLang="en" href="https://barakajoshua.com" />
        <StructuredData />
      </head>
      <body className={`${spaceMono.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Preloader />
        <GoogleAnalytics />
        <SnowfallComponent />
        {children}
      </body>
    </html>
  );
}
