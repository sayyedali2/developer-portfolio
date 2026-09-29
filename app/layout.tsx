import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sayyed Amaan Ali | Full-Stack Developer",

  description:
    "Portfolio of Sayyed Amaan Ali, a Full-Stack Developer building modern web applications, SaaS products, and AI-powered applications with Next.js, Node.js, NestJS, and TypeScript.",

  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "SaaS Developer",
    "AI Developer",
    "Udaipur Developer",
  ],

  authors: [{ name: "Sayyed Amaan Ali" }],

  creator: "Sayyed Amaan Ali",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sayyed Amaan Ali | Full-Stack Developer",

    description:
      "Full-Stack Developer building modern web applications, SaaS products, and AI-powered applications with Next.js, Node.js, NestJS, and TypeScript.",

    siteName: "Sayyed Amaan Ali Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sayyed Amaan Ali | Full-Stack Developer",

    description:
      "Full-Stack Developer building modern web applications, SaaS products, and AI-powered applications with Next.js, Node.js, NestJS, and TypeScript.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} dark`}
      style={{ backgroundColor: "#07080A" }}
    >
      <body className="font-sans antialiased" style={{ backgroundColor: "#07080A", color: "#FFFFFF" }}>
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
