"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Default to closed, will be updated in useEffect

  // Check if the screen is mobile size
  useEffect(() => {
    // Function to check if mobile and set menu state accordingly
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Close menu by default on mobile, keep open on desktop
      setIsMenuOpen(!mobile);
    };

    // Initial check - run on client-side only
    if (typeof window !== "undefined") {
      checkIfMobile();

      // Add event listener for window resize
      window.addEventListener("resize", checkIfMobile);

      // Cleanup
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked (for mobile)
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Editor", href: "/editor" },
    { name: "Buy & Sell", href: "https://marketplace.zoomtanzania.net/" },
    { name: "Jobs", href: "https://www.zoomtanzania.net/jobs/" },
    { name: "Directory", href: "https://www.zoomtanzania.net/directory/" },
    {
      name: "Professional",
      href: "https://www.zoomtanzania.net/professionals/",
    },
    { name: "Blog", href: "https://www.zoomtanzania.net/blog/" },
  ];

  return (
    <header className="mx-auto flex max-w-screen-xl items-center justify-between mt-3 px-3 py-2.5 2xl:max-w-screen-2xl relative">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href={"/"}>
          <img
            src="/faviconi.png"
            alt="Zoom Tanzania"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Desktop menu in the middle */}
      <div
        className={`hidden md:flex flex-grow mx-8 ${isMenuOpen ? "flex" : "hidden"}`}
      >
        <ul className="flex flex-row space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white hover:text-gray-300 font-medium"
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu Button - Always on right */}
      <button
        className="z-20 flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile menu - slides in from left */}
      <nav
        className={`
          md:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg z-10 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="p-4 flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white hover:text-gray-300 font-medium"
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
