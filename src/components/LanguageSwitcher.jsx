import React from 'react'
import { Sparkles } from 'lucide-react'
export default function LanguageSwitcher({ lang, toggle, label, toLabel }) {
    return (
        <button type="button" onClick={toggle} aria-label={label}
            className="btn btn-sm btn-dark border border-secondary-subtle rounded-pill d-inline-flex align-items-center gap-2">
            <Sparkles size={14} /> {toLabel}
        </button>
    )
}