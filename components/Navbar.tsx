"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NAV_ITEMS, ROUTES } from "@/utils/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href={ROUTES.HOME}
            className="flex items-center space-x-3 group"
          >
            <img
              src="/logo.png"
              alt="Orthos logo"
              className="w-40 h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors relative group ${
                    isActive
                      ? "text-[#115e59] dark:text-[#115e59]"
                      : "text-text-light dark:text-text-dark hover:text-[#115e59] dark:hover:text-[#115e59]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#115e59] rounded-t-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side - Dark mode toggle and mobile menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-card transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <FaSun size={18} className="text-yellow-400" />
              ) : (
                <FaMoon size={18} className="text-gray-500" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-card"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-text-light dark:text-text-dark" />
              ) : (
                <Menu
                  size={24}
                  className="text-text-light dark:text-text-dark"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 slide-up">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-light-bg dark:hover:bg-dark-card rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

