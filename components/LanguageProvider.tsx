"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import en from "@/messages/en";
import hi from "@/messages/hi";

const languages = {
  en,
  hi,
};

type Language = keyof typeof languages;

const LanguageContext = createContext<any>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [language, setLanguage] =
    useState<Language>("en");

  const t = languages[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >

      {children}

    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}