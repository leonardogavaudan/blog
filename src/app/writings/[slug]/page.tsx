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
        <article className="max-w-4xl mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">
                    {frontMatter.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-500">
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
                    <span>&middot;</span>
                    <span>{readingTime}</span>
                </div>
            </header>

            <TableOfContents headings={toc} />

            <div className="prose prose-lg max-w-none prose-invert">
                {content}
            </div>
        </article>
    );
}
