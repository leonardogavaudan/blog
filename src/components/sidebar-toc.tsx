'use client';

import { useEffect, useState } from 'react';
import { TocEntry } from '../lib/posts';

interface SidebarTocProps {
    headings: TocEntry[];
}

export function SidebarToc({ headings }: SidebarTocProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
        );

        for (const heading of headings) {
            const el = document.getElementById(heading.id);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <h2
                className="font-serif text-sm font-medium mb-3"
                style={{ color: 'var(--text-tertiary)' }}
            >
                On this page
            </h2>
            <ul className="space-y-1.5 border-l" style={{ borderColor: 'var(--border)' }}>
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            className="block text-xs 2xl:text-sm leading-relaxed transition-colors duration-150"
                            style={{
                                paddingLeft: heading.depth === 3 ? '1.25rem' : '0.75rem',
                                color: activeId === heading.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
                                borderLeft: activeId === heading.id ? '2px solid var(--text-primary)' : '2px solid transparent',
                                marginLeft: '-1px',
                                fontWeight: activeId === heading.id ? 500 : 400,
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
