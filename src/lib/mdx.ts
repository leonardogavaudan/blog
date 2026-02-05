import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import { getPostRaw, serializeDate, TocEntry, PostFrontMatter } from './posts';
import { visit } from 'unist-util-visit';
import { ReactElement } from 'react';

/**
 * Custom rehype plugin that extracts h2/h3 headings into a TOC array.
 * Runs after rehype-slug so each heading already has an `id` property.
 */
function rehypeExtractToc(toc: TocEntry[]) {
    return () => {
        return (tree: any) => {
            visit(tree, 'element', (node: any) => {
                if (node.tagName === 'h2' || node.tagName === 'h3') {
                    const id = node.properties?.id;
                    const text = extractText(node);
                    if (id && text) {
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
function extractText(node: any): string {
    if (node.type === 'text') return node.value;
    if (node.children) {
        return node.children.map(extractText).join('');
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
