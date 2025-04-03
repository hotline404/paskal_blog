import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//헤더가 올 루트 컴포넌트
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "paskal's blog",
  description: "파스칼의 블로그입니다. paskal's blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-[100%] h-screen bg-[#252525] ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[100%] h-screen bg-[#252525]`}
      >
        {children}
      </body>
    </html>
  );
}
