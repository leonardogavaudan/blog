import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

interface post {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
}

interface posts {
  posts: post[];
}

const Home = ({ posts }: posts) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/post/${slug}`}>
            <a>
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
