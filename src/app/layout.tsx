import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Animations from "./body-animations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const lato = Lato({
  variable: "--font-lato",
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
  fallback: []
});

export const metadata: Metadata = {
  title: "De Montessori Care International School",
  description: "Learn about our holistic curriculum, dedicated faculty, and enrollment process for a transformative Montessori experience."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <Navbar />
        <Animations>
          {children}
        </Animations>
        <Footer />
      </body>
    </html>
  );
}