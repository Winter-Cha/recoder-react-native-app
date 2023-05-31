import { createIntl, createIntlCache } from "@formatjs/intl";
import {I18nManager} from "react-native";
import * as RNLocalize from "react-native-localize";

const translations = {
  en: require("./translations/en.json"),
  ko: require("./translations/ko.json"),
} as const;

type Translation = keyof typeof translations;

// fallback if no available language fits
const fallback = { languageTag: "en", isRTL: false };

// isRTL = right to left language
const { languageTag, isRTL } =
  RNLocalize.findBestLanguageTag(Object.keys(translations)) ?? fallback;

// update layout direction
I18nManager.forceRTL(isRTL);

const intl = createIntl(
  {
    defaultLocale: "ko",
    locale: languageTag,
    messages: translations[languageTag as Translation],
  },
  createIntlCache(),
);

type TranslationParams = Parameters<(typeof intl)["formatMessage"]>[1];

export const translate = (key: string, params?: TranslationParams) =>
  intl
    .formatMessage({ id: key, defaultMessage: translations["ko"][key] }, params)
    .toString();
