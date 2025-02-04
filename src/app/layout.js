import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import Navbar from "@/components/navbar";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiew | Management Professional",
  description: "Experienced Management Professional specializing in Project Management, Operations Optimization, and Strategic Planning across Oil & Gas, Environmental Engineering, and Process Industries.",
  metadataBase: new URL('https://yourdomain.com'),
  keywords: ["project management", "operations", "oil and gas", "environmental engineering"],
  openGraph: {
    title: "Tiew | Management Professional",
    description: "15+ years of experience in Project Management & Operations",
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tiew | Management Professional",
    description: "15+ years of experience in Project Management & Operations",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1C1C1E" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} bg-ios-bg-light dark:bg-ios-bg-dark`}>
        <ThemeProvider>
          <Navbar />
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
