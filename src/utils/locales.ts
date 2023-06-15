import data from "../data/locales.json";

export const locales = ["en", "zh", "uwu"] as const;
export const defaultLang = "en";

export function getLocaleStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export function getLocaleFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if ((locales as unknown as string[]).includes(lang))
    return lang as (typeof locales)[number];
  return defaultLang;
}

export function t(query: string, locale?: string) {
  const data2 = data as Record<string, Record<string, string>>;
  return (
    data2[locale ?? ""]?.[query] ??
    data2[defaultLang][query] ??
    `${locale ?? defaultLang}.${query}`
  );
}
