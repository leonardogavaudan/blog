import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default function Writings() {
    const posts = getAllPosts().sort(
        (a, b) =>
            new Date(b.frontMatter.date).getTime() -
            new Date(a.frontMatter.date).getTime()
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Writings</h1>
            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group">
                        <Link
                            href={`/writings/${post.slug}`}
                            className="block group-hover:opacity-75 transition-opacity"
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {post.frontMatter.title}
                            </h2>
                            <div className="flex items-center space-x-3 text-gray-500 text-sm">
                                <time>
                                    {new Date(
                                        post.frontMatter.date
                                    ).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                                <span>&middot;</span>
                                <span>{post.readingTime}</span>
                            </div>
                            {post.frontMatter.description && (
                                <p className="mt-2 text-gray-600">
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
