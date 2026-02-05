import React from 'react';
import { TocEntry } from '../lib/posts';

interface TableOfContentsProps {
    headings: TocEntry[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    if (headings.length === 0) return null;

    return (
        <nav
            className="mb-10 p-5 rounded-xl border transition-colors duration-300"
            style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg-secondary)',
            }}
        >
            <h2
                className="font-serif text-base font-medium mb-3"
                style={{ color: 'var(--text-primary)' }}
            >
                Table of Contents
            </h2>
            <ul className="space-y-2">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={heading.depth === 3 ? 'ml-4' : ''}
                    >
                        <a
                            href={`#${heading.id}`}
                            className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
