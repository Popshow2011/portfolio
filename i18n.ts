import { getRequestConfig } from 'next-intl/server';

export const locales = ['ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = (locale && locales.includes(locale as Locale))
    ? locale as Locale
    : defaultLocale;

  return {

    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
