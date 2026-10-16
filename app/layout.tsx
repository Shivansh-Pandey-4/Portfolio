import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Header from "@/components/landing/Header";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivansh Pandey Portfolio",
  description: "Modern portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <div className="bg-zinc-100 dark:bg-neutral-900 border-t border-gray-300 dark:border-gray-700">
            <Contact />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
