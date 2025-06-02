import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faro Klandee | Developing a future",
  description: "Portfolio of Faro Klandee, a developer specializing in architecturing solutions.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: 'favicon-16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: 'favicon-32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: 'favicon-192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: 'favicon-512x512', type: 'image/png' },
    ],
    // For Apple devices
    apple: '/favicon-apple.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
