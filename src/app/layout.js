import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HumanityFirst Global Relief",
  description: "Transparent humanitarian donation platform for food, health, education, environment and global welfare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-muted">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
