"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { i18n, getAlternateLocale } from "./settings";
import Link from "next/link";
import { Suspense } from "react";

// This component contains the parts that need searchParams
const LanguageSwitcherContent = ({ locale, dictionary }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get the alternate locale
  const alternateLocale = getAlternateLocale(locale);

  // Create the URLs for each locale
  const createLocaleUrl = (localeCode) => {
    // Create a new URLSearchParams instance to preserve all current query parameters
    const params = new URLSearchParams(searchParams.toString());

    // Add or update the locale parameter
    if (localeCode === i18n.defaultLocale) {
      params.delete("locale");
    } else {
      params.set("locale", localeCode);
    }

    // Construct the new URL
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">
        {dictionary.ui.languageSwitcher}:
      </span>
      <div className="flex gap-2">
        <Link
          href={createLocaleUrl("en")}
          className={`text-sm px-2 py-1 rounded ${
            locale === "en"
              ? "bg-primary-400 text-black"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {dictionary.ui.english}
        </Link>
        <Link
          href={createLocaleUrl("sw")}
          className={`text-sm px-2 py-1 rounded ${
            locale === "sw"
              ? "bg-primary-400 text-black"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {dictionary.ui.swahili}
        </Link>
      </div>
    </div>
  );
};

// Main component that wraps the content with Suspense
export default function LanguageSwitcher({ locale, dictionary }) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">
            {dictionary.ui.languageSwitcher}:
          </span>
          <div className="flex gap-2">
            <span className="text-sm px-2 py-1 rounded bg-gray-700">
              {dictionary.ui.english}
            </span>
            <span className="text-sm px-2 py-1 rounded bg-gray-700">
              {dictionary.ui.swahili}
            </span>
          </div>
        </div>
      }
    >
      <LanguageSwitcherContent locale={locale} dictionary={dictionary} />
    </Suspense>
  );
}
