import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import { Roboto } from "next/font/google";
import { AppProvider } from "./Components/layout/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StatusQuo",
  description: "AI PROJECT MANAGER",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <main className="mx-auto p-4">
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
        </main>
      </body>
    </html>
  );
}
