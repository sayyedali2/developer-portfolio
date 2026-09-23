import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: " Sayyed Amaan Ali | Junior Full Stack Developer",
  description:
    "Portfolio of Sayyed Amaan Ali - A passionate Junior Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Freelance Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Sayyed Amaan Ali" }],
  creator: "Sayyed Amaan Ali",
  openGraph: {
    type: "website",
    locale: "Udaipur, Rajasthan, India",
    title: "Sayyed Amaan Ali | Junior Full Stack Developer",
    description:
      "Passionate Junior Full Stack Developer specializing in building scalable modern web applications.",
    siteName: "Sayyed Amaan Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayyed Amaan Ali | Junior Full Stack Developer",
    description:
      "Passionate Junior Full Stack Developer specializing in building scalable modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
      className={`${inter.variable} ${jetbrainsMono.variable} bg-white`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
