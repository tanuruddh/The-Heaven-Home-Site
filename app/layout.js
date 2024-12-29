import { Geist, Geist_Mono } from "next/font/google";
import '@/app/_styles/globals.css'

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  // title: "The Heaven Home",
  title: {
    template: "%s The Heaven Home",
    default: "Welcome / The Heaven Home",
    description: "Luxurious cabin hotel, located in the heart of India, surrounded by beautiful mountains and dark forests"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative `}
      >
        <Header />
        <div className=" flex-1 px-8 py-12 grid">
          <main className=" max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
