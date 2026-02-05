import React from 'react';
import { TocEntry } from '../lib/posts';

interface TableOfContentsProps {
    headings: TocEntry[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    if (headings.length === 0) return null;

    return (
        <nav className="mb-8 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <h2 className="text-lg font-semibold mb-3 text-white">
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
                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
