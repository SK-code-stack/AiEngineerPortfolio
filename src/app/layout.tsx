import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Big_Shoulders_Display } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false, // mono font is not in the critical path
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  display: "swap",
  preload: true, // used prominently in hero headline
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

export const metadata: Metadata = {
  title: "Muhammad Salman Khan | Full-Stack Dev & ML Engineer",
  description:
    "Personal portfolio of Muhammad Salman Khan — Full-Stack Developer & ML Engineer based in Lahore, Pakistan. Specializing in React, Django, PyTorch, and RAG systems.",
  keywords: [
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "React",
    "Django",
    "PyTorch",
    "Next.js",
    "Lahore Pakistan",
    "Muhammad Salman Khan",
  ],
  authors: [{ name: "Muhammad Salman Khan" }],
  creator: "Muhammad Salman Khan",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Salman Khan | Full-Stack Dev & ML Engineer",
    description:
      "Building intelligent full-stack systems — React, Django, PyTorch, RAG. Based in Lahore, Pakistan.",
    siteName: "Salman Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Salman Khan | Full-Stack Dev & ML Engineer",
    description:
      "Building intelligent full-stack systems — React, Django, PyTorch, RAG. Based in Lahore, Pakistan.",
    creator: "@salman_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Inline script runs before any paint — prevents flash of wrong theme */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} ${bigShoulders.variable} antialiased`}
      >
        <ScrollProgress />
        <div className="corner-gradient-bar" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
