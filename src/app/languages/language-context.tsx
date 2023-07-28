'use client'

import React, { createContext, useContext, useState } from 'react'

export type Language = 'en' | 'id'

interface LanguageOptions {
    [key: string]: string
}

interface LanguageContextType {
    language: Language
    languageOptions: { [key in Language]: LanguageOptions }
    switchLanguage: (lang: Language) => void
    getString: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    // const defaultLanguage = window.localStorage.getItem('rjwl-lang')
    const [language, setLanguage] = useState<Language>(/*defaultLanguage ? (defaultLanguage as Language) : */ 'en')

    // Load custom dictionaries from JSON files
    const enDictionary: LanguageOptions = require('./en.json')
    const idDictionary: LanguageOptions = require('./id.json')

    const languageOptions: { [key in Language]: LanguageOptions } = {
        en: enDictionary,
        id: idDictionary,
    }

    const switchLanguage = (lang: Language) => {
        setLanguage(lang)
        // window.localStorage.setItem('rjwl-lang', lang)
        console.log(`Language switched to ${lang}`)
    }

    const getString = (key: string) => {
        return languageOptions[language][key]
    }

    const contextValue: LanguageContextType = {
        language,
        languageOptions,
        switchLanguage,
        getString,
    }

    return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export { LanguageProvider, useLanguage }
