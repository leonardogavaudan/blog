import { GetStaticProps, GetStaticPaths } from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

interface PostProps {
  content: string;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
  };
}

export default function Post({ content, frontMatter }: PostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{frontMatter.title}</h1>
        <time className="text-gray-500">
          {new Date(frontMatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </header>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filePath = path.join(postsDirectory, `${params?.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data: frontMatter, content } = matter(fileContents);
  const md = new MarkdownIt();
  const htmlContent = md.render(content);

  return {
    props: {
      content: htmlContent,
      frontMatter,
    },
  };
};
