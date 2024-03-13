import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import { AppProvider } from "./Components/layout/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StatusQou",
  description: "All in One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} gradient-background`}>
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
