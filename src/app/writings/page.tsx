import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default function Writings() {
    const posts = getAllPosts().sort(
        (a, b) =>
            new Date(b.frontMatter.date).getTime() -
            new Date(a.frontMatter.date).getTime()
    );

    return (
        <div>
            <div className="mb-10">
                <h1
                    className="font-serif text-3xl sm:text-4xl font-medium tracking-tight"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Writings
                </h1>
            </div>

            <div className="space-y-4">
                {posts.map((post, index) => (
                    <article
                        key={post.slug}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${(index + 1) * 0.1}s`, opacity: 0 }}
                    >
                        <Link
                            href={`/writings/${post.slug}`}
                            className="block rounded-xl p-5 card-hover group"
                        >
                            <h2
                                className="font-serif text-xl font-medium mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {post.frontMatter.title}
                            </h2>
                            <div
                                className="flex items-center gap-2 text-sm"
                                style={{ color: 'var(--text-tertiary)' }}
                            >
                                <time>
                                    {new Date(
                                        post.frontMatter.date
                                    ).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                                <span style={{ color: 'var(--accent)' }}>
                                    &middot;
                                </span>
                                <span>{post.readingTime}</span>
                            </div>
                            {post.frontMatter.description && (
                                <p
                                    className="mt-3 text-sm leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {post.frontMatter.description}
                                </p>
                            )}
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
