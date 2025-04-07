"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ResumeFields from "@/config/ResumeFields";
import ThemeToggle from "@/components/UI/ThemeToggle";

// Create a separate component that uses useSearchParams
const NavigationContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isEditorPage = pathname === "/editor";
  const currentTab = searchParams.get("tab") || "contact";
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // All menu items
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

  // For mobile menu on editor page, only show Home
  const mobileMenuItems = isEditorPage
    ? menuItems.filter((item) => item.name === "Home")
    : menuItems;

  // Resume editor tabs for the mobile menu
  const getEditorTabs = () => {
    if (!isEditorPage) return [];

    return Object.keys(ResumeFields).map((tab) => ({
      name: ResumeFields[tab].name,
      href: `/editor/?tab=${tab}`,
      isTab: true,
      isActive: tab === currentTab,
    }));
  };

  const editorTabs = getEditorTabs();

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

      {/* Desktop menu in the middle - always show all items */}
      <div className="hidden md:flex flex-grow mx-8">
        <ul className="flex flex-row space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme toggle on desktop */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Hamburger Menu Button - Only on mobile */}
      <button
        className="md:hidden z-20 flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-900 dark:bg-white mb-1.5 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 dark:bg-white mb-1.5 transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile menu - slides in from left */}
      <nav
        className={`
          md:hidden fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 shadow-lg z-10 transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4">
          {/* Theme toggle in mobile menu */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-900 dark:text-gray-300 font-medium">
              Theme
            </span>
            <ThemeToggle />
          </div>

          <ul className="flex flex-col space-y-4">
            {/* Regular menu items (only Home on editor page for mobile) */}
            {mobileMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Editor tabs in mobile menu - always visible when on editor page */}
            {isEditorPage && editorTabs.length > 0 && (
              <>
                {/* Only add divider if we have regular menu items */}
                {menuItems.length > 0 && (
                  <li className="border-t border-gray-700 pt-4 mt-2">
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      Resume Sections
                    </span>
                  </li>
                )}

                {/* List all tabs directly */}
                {editorTabs.map((tab, index) => (
                  <li key={`tab-${index}`}>
                    <Link
                      href={tab.href}
                      className={`block py-2 ${
                        tab.isActive
                          ? "text-primary-400 border-l-4 border-primary-400 pl-2"
                          : "text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 pl-3"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {tab.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

// Main Header component that wraps NavigationContent in a Suspense boundary
const Header = () => {
  return (
    <Suspense
      fallback={
        <header className="mx-auto flex max-w-screen-xl items-center justify-between mt-3 px-3 py-2.5 2xl:max-w-screen-2xl relative">
          <div className="flex items-center">
            <Link href={"/"}>
              <img
                src="/faviconi.png"
                alt="Zoom Tanzania"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="h-8 w-8"></div> {/* Placeholder for menu button */}
        </header>
      }
    >
      <NavigationContent />
    </Suspense>
  );
};

export default Header;
