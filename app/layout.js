import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Showcase of my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-gray-200`}>
        <div className="min-h-screen flex flex-col">
          <header className="p-6 border-b border-teal-600 bg-gradient-to-r from-slate-800 to-slate-900">
            <h1 className="text-4xl font-bold text-white">My Portfolio</h1>
            <nav className="mt-4">
              <a href="#home" className="mr-4 text-teal-400 hover:text-teal-200">Home</a>
              <a href="#projects" className="mr-4 text-teal-400 hover:text-teal-200">Projects</a>
              <a href="#about" className="mr-4 text-teal-400 hover:text-teal-200">About</a>
              <a href="#contact" className="text-teal-400 hover:text-teal-200">Contact</a>
            </nav>
          </header>
          <main className="flex-grow p-6">
            {children}
          </main>
          <footer className="p-6 border-t border-teal-600 bg-gradient-to-r from-slate-800 to-slate-900 text-center text-white">
            &copy; 2024 My Portfolio
          </footer>
        </div>
      </body>
    </html>
  );
}
