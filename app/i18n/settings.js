export const i18n = {
  defaultLocale: "sw",
  locales: ["en", "sw"],
};

export const getLocaleFromParams = (params) => {
  const locale = params?.locale || i18n.defaultLocale;

  // Validate that the locale is supported
  if (!i18n.locales.includes(locale)) {
    return i18n.defaultLocale;
  }

  return locale;
};

export const getAlternateLocale = (locale) => {
  return locale === "en" ? "sw" : "en";
};
