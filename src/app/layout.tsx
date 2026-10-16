import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibek Kumar Sah — Full-Stack Developer",
  description:
    "Full-stack developer building performant web applications with TypeScript, React, Next.js, and Node.js. Specializing in AI-integrated products, real-time systems, and scalable backend architecture.",
  keywords: [
    "Bibek Kumar Sah",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Kathmandu Nepal",
    "Software Developer",
    "Portfolio",
  ],
  authors: [{ name: "Bibek Kumar Sah" }],
  openGraph: {
    title: "Bibek Kumar Sah — Full-Stack Developer",
    description:
      "Full-stack developer building performant web applications with TypeScript, React, Next.js, and Node.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Kumar Sah — Full-Stack Developer",
    description:
      "Full-stack developer building performant web applications with TypeScript, React, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="sarthak-theme">{children}</body>
    </html>
  );
}
