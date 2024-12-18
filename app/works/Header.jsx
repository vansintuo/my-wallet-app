"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-lg font-bold">
          <Link href="/" className="hover:underline">
            BABAKA
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle */}
        <button
          className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded"
          onClick={() => {
            console.log("Current theme:", theme); 
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
