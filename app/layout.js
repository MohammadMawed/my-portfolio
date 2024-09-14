import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Mawed, Portfolio",
  description: "Showcase of my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-gray-200`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="py-6 px-4 bg-gray-800 bg-opacity-90 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-400">Mohammad Mawed</h1>
          <div className="space-x-6">
            <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-300 hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

          {/* Main Content */}
          <main className="flex-grow p-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="p-6 border-t border-teal-600 bg-gradient-to-r from-slate-800 to-slate-900 text-center text-white">
            &copy; 2024 My Portfolio
          </footer>
        </div>
      </body>
    </html>
  );
}
