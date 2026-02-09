import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import { getPostRaw, serializeDate, TocEntry, PostFrontMatter } from './posts';
import { visit } from 'unist-util-visit';
import { ReactElement } from 'react';
import type { Root, Element, Nodes } from 'hast';

/**
 * Custom rehype plugin that extracts h2/h3 headings into a TOC array.
 * Runs after rehype-slug so each heading already has an `id` property.
 */
function rehypeExtractToc(toc: TocEntry[]) {
    return () => {
        return (tree: Root) => {
            visit(tree, 'element', (node: Element) => {
                if (node.tagName === 'h2' || node.tagName === 'h3') {
                    const id = node.properties?.id;
                    const text = extractText(node);
                    if (typeof id === 'string' && text) {
                        toc.push({
                            id,
                            text,
                            depth: node.tagName === 'h2' ? 2 : 3,
                        });
                    }
                }
            });
        };
    };
}

/** Recursively extract plain text from a HAST node. */
function extractText(node: Nodes): string {
    if (node.type === 'text') return node.value;
    if ('children' in node) {
        return (node.children as Nodes[]).map(extractText).join('');
    }
    return '';
}

export async function getPostBySlug(slug: string): Promise<{
    content: ReactElement;
    frontMatter: PostFrontMatter;
    readingTime: string;
    toc: TocEntry[];
}> {
    const raw = getPostRaw(slug);
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    const toc: TocEntry[] = [];

    const { content: mdxContent } = await compileMDX({
        source: content,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                    rehypeSlug,
                    [
                        rehypePrettyCode,
                        {
                            theme: 'one-dark-pro',
                        },
                    ],
                    rehypeExtractToc(toc),
                ],
            },
        },
    });

    return {
        content: mdxContent,
        frontMatter: serializeDate(data),
        readingTime: stats.text,
        toc,
    };
}
