import { useMemo, useState } from 'react'
import strings from '../locales/language.json'
export const useI18n = () => {
    const [lang, setLang] = useState('en')
    const t = useMemo(() => strings[lang], [lang])
    const toggle = () => setLang(prev => prev === 'en' ? 'da' : 'en')
    return { lang, setLang, toggle, t }
}