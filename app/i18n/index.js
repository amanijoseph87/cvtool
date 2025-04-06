import { i18n } from "./settings";

// Cache dictionaries to avoid reloading them
const dictionaries = {};

export const getDictionary = async (locale) => {
  // Validate that the locale is supported
  const validLocale = i18n.locales.includes(locale)
    ? locale
    : i18n.defaultLocale;

  // Return from cache if available
  if (dictionaries[validLocale]) {
    return dictionaries[validLocale];
  }

  // Load the dictionary
  try {
    const dictionary = (await import(`./dictionaries/${validLocale}.json`))
      .default;
    dictionaries[validLocale] = dictionary;
    return dictionary;
  } catch (error) {
    console.error(`Error loading dictionary for locale ${validLocale}:`, error);

    // Fallback to default locale if there's an error
    if (validLocale !== i18n.defaultLocale) {
      return getDictionary(i18n.defaultLocale);
    }

    // If even the default locale fails, return an empty dictionary
    return {};
  }
};
