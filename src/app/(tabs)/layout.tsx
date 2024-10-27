import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoW",
  description: "Website for tracking your attendance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="content flex">
        <Navbar/>
        <div>
          <h1 className='heading m-2 p-2'>Dashboard</h1>
          <div className='m-2 p-2 page'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
