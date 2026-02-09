import { getPostBySlug } from '../../../lib/mdx';
import { getPostSlugs } from '../../../lib/posts';
import { TableOfContents } from '../../../components/table-of-contents';
import { SidebarToc } from '../../../components/sidebar-toc';

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
    const hasToc = toc.length > 0;

    return (
        <div className={hasToc ? "lg:flex lg:gap-10 2xl:gap-12" : "max-w-prose 2xl:max-w-[76ch] mx-auto"}>
            <article className="animate-fade-in-up min-w-0 flex-1 max-w-prose 2xl:max-w-[76ch]">
                <header className="mb-10">
                    <h1
                        className="font-serif text-3xl sm:text-4xl lg:text-[2.1rem] 2xl:text-5xl font-medium tracking-tight mb-4"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {frontMatter.title}
                    </h1>
                    <div
                        className="flex items-center gap-2 text-sm 2xl:text-base"
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

                {/* Inline TOC for small screens */}
                <div className="lg:hidden">
                    <TableOfContents headings={toc} />
                </div>

                <div className="prose prose-sm lg:prose-sm xl:prose-base 2xl:prose-lg max-w-none">
                    {content}
                </div>
            </article>

            {/* Sidebar TOC for wide screens */}
            <aside className="hidden lg:block w-56 2xl:w-64 shrink-0">
                <SidebarToc headings={toc} />
            </aside>
        </div>
    );
}
