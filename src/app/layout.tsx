import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/custom/header";

// custom font setup
const manrope = Manrope({
  subsets: ['latin'],
  variable: "--font-manrope",
});


// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-background font-manrope antialiased', manrope.variable)}
      // className={`${manrope.variable}  antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
