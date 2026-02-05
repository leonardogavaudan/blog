import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'src', 'posts');

export interface TocEntry {
    id: string;
    text: string;
    depth: number;
}

export interface PostFrontMatter {
    title: string;
    date: string;
    tags?: string[];
    metaTitle?: string;
    metaDesc?: string;
    socialImage?: string;
    description?: string;
}

export interface PostListItem {
    slug: string;
    frontMatter: PostFrontMatter;
    readingTime: string;
}

export function getPostRaw(slug: string): string {
    const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
    const mdPath = path.join(POSTS_DIR, `${slug}.md`);
    if (fs.existsSync(mdxPath)) {
        return fs.readFileSync(mdxPath, 'utf8');
    }
    return fs.readFileSync(mdPath, 'utf8');
}

export function serializeDate(
    data: Record<string, unknown>
): PostFrontMatter {
    return {
        ...data,
        date:
            data.date instanceof Date
                ? data.date.toISOString().split('T')[0]
                : data.date,
    } as PostFrontMatter;
}

export function getPostSlugs(): string[] {
    return fs
        .readdirSync(POSTS_DIR)
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((f) => f.replace(/\.mdx?$/, ''));
}

export function getAllPosts(): PostListItem[] {
    return getPostSlugs().map((slug) => {
        const raw = getPostRaw(slug);
        const { data, content } = matter(raw);
        const stats = readingTime(content);
        return {
            slug,
            frontMatter: serializeDate(data),
            readingTime: stats.text,
        };
    });
}
