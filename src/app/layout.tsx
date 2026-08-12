import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { PROFILE_DATA } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PROFILE_DATA.name} | ${PROFILE_DATA.title}`,
  description: PROFILE_DATA.tagline,
  keywords: [
    "CHEVURI JAHNAVI",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "FastAPI",
    "LangChain",
    "React",
    "Next.js",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: PROFILE_DATA.name }],
  creator: PROFILE_DATA.name,
  openGraph: {
    title: `${PROFILE_DATA.name} | Portfolio`,
    description: PROFILE_DATA.tagline,
    url: "https://jahnavi-portfolio.vercel.app",
    siteName: `${PROFILE_DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE_DATA.name} | Portfolio`,
    description: PROFILE_DATA.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
