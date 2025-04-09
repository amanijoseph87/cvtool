"use client";

import Link from "next/link";
import { useState, useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ResumeFields from "@/config/ResumeFields";
import ThemeToggle from "@/components/UI/ThemeToggle";

// Create a separate component that uses useSearchParams
const NavigationContent = ({ headerRef }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isEditorPage = pathname === "/editor";
  const currentTab = searchParams.get("tab") || "contact";
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsMenuOpen(false); // Always close on resize
    };

    if (typeof window !== "undefined") {
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
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

  // All menu items - for desktop view always display these
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "https://www.zoomtanzania.net/jobs/" },
    { name: "Directory", href: "https://www.zoomtanzania.net/directory/" },
    {
      name: "Professionals",
      href: "https://www.zoomtanzania.net/professionals/",
    },
    { name: "Buy & Sell", href: "https://marketplace.zoomtanzania.net/" },
    { name: "Blog", href: "https://www.zoomtanzania.net/blog/" },
    { name: "Pricing", href: "https://www.zoomtanzania.net/pricing/" },
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

  // Dynamic CTA button based on current page
  const ctaButton = isEditorPage
    ? {
        text: "Apply Jobs",
        href: "https://www.zoomtanzania.net/jobs/",
        target: "_blank",
      }
    : {
        text: "Start It's Free",
        href: "/editor",
        target: "_self",
      };

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 right-0 z-[50] bg-blue-600 text-white shadow-md"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center h-16">
          {/* Logo section */}
          <div className="pl-4 flex-shrink-0">
            <Link href="/">
              <img
                src="/faviconi.png"
                alt="Zoom Tanzania"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Menu items - shifted left */}
          <div className="hidden md:flex ml-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 text-base"
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Spacer to push right elements to the edge */}
          <div className="flex-grow"></div>

          {/* Right Side Actions */}
          <div className="pr-4 hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href={ctaButton.href}
              className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-base flex items-center gap-2"
              target={ctaButton.target}
            >
              {ctaButton.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button - visible only on mobile */}
          <div className="md:hidden ml-auto pr-4">
            <button
              className="z-[60] flex flex-col justify-center items-center w-8 h-8"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`
          md:hidden fixed top-0 left-0 h-full w-64 bg-blue-700 shadow-lg z-[60] transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <Link href="/">
                <img
                  src="/faviconi.png"
                  alt="Zoom Tanzania"
                  className="h-10 w-auto"
                />
              </Link>
              <button onClick={toggleMenu} className="text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col space-y-4">
              {/* Mobile menu items (Home only on editor page) */}
              {mobileMenuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-200 font-medium block py-2 text-base"
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Editor tabs in mobile menu - only visible when on editor page */}
              {isEditorPage && editorTabs.length > 0 && (
                <>
                  <li className="border-t border-blue-500 pt-4 mt-2">
                    <span className="text-gray-200 text-base font-medium">
                      Resume Sections
                    </span>
                  </li>

                  {/* List all tabs */}
                  {editorTabs.map((tab, index) => (
                    <li key={`tab-${index}`}>
                      <Link
                        href={tab.href}
                        className={`block py-2 ${
                          tab.isActive
                            ? "text-white font-bold border-l-4 border-white pl-2 text-base"
                            : "text-gray-200 hover:text-white pl-3 text-base"
                        }`}
                        onClick={handleLinkClick}
                      >
                        {tab.name}
                      </Link>
                    </li>
                  ))}
                </>
              )}

              {/* CTA button - dynamic based on page */}
              <li className="border-t border-blue-500 pt-4 mt-2">
                <Link
                  href={ctaButton.href}
                  className="bg-blue-800 text-white hover:bg-blue-900 px-4 py-2 rounded-md text-base flex items-center justify-center gap-2"
                  onClick={handleLinkClick}
                  target={ctaButton.target}
                >
                  {ctaButton.text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Theme toggle at the bottom */}
          <div className="mt-6 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

// Main Header component that wraps NavigationContent in a Suspense boundary
const Header = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(64); // Default height of 64px (h-16)

  // Measure header height after it renders and when window resizes
  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      }
    };

    // Initial height measurement - with small delay to ensure accurate measurement
    setTimeout(updateHeight, 100);

    // Update on resize
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <header className="w-full fixed top-0 left-0 right-0 z-[50] bg-blue-600 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <Link href={"/"}>
                  <img
                    src="/faviconi.png"
                    alt="Zoom Tanzania"
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
            </div>
          </header>
        }
      >
        <NavigationContent headerRef={headerRef} />
      </Suspense>
      {/* Spacer to prevent content from being hidden under the fixed header */}
      <div
        id="header-spacer"
        style={{ height: `${headerHeight}px`, minHeight: "64px" }}
      ></div>
    </>
  );
};

// Create a wrapper component to ensure proper layout
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export { Layout };
export default Header;
