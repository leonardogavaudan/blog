import { getPostBySlug } from '../../../lib/mdx';
import { getPostSlugs } from '../../../lib/posts';
import { TableOfContents } from '../../../components/table-of-contents';

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function Post({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { content, frontMatter, readingTime, toc } =
        await getPostBySlug(slug);

    return (
        <article className="animate-fade-in-up">
            <header className="mb-10">
                <h1
                    className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {frontMatter.title}
                </h1>
                <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                >
                    <time>
                        {new Date(frontMatter.date).toLocaleDateString(
                            'en-US',
                            {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }
                        )}
                    </time>
                    <span style={{ color: 'var(--accent)' }}>&middot;</span>
                    <span>{readingTime}</span>
                </div>
            </header>

            <TableOfContents headings={toc} />

            <div
                className="prose prose-lg max-w-none"
                style={{ color: 'var(--text-primary)' }}
            >
                {content}
            </div>
        </article>
    );
}
