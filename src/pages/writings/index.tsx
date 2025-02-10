import { GetStaticProps } from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Post {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
  };
}

interface WritingsProps {
  posts: Post[];
}

export default function Writings({ posts }: WritingsProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Writings</h1>
      <div className="space-y-8">
        {posts
          .sort((a, b) => 
            new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
          )
          .map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/writings/${post.slug}`}>
                <a className="block group-hover:opacity-75 transition-opacity">
                  <h2 className="text-2xl font-semibold mb-2">{post.frontMatter.title}</h2>
                  <time className="text-gray-500 text-sm">
                    {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.frontMatter.description && (
                    <p className="mt-2 text-gray-600">{post.frontMatter.description}</p>
                  )}
                </a>
              </Link>
            </article>
          ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter } = matter(fileContents);
    
    return {
      slug: filename.replace('.md', ''),
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
