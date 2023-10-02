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
        <div className="container mx-auto px-4 pt-8">
            <h1 className="text-3xl font-bold mb-8">Posts</h1>
            <ul className="list-disc pl-6">
                {posts.map(({ slug, frontmatter }) => (
                    <li key={slug} className="my-8">
                        <Link href={`/post/${slug}`}>
                            <a className="flex justify-between items-center">
                                <span className="underline underline-offset-2 text-xl">
                                    {frontmatter.title}
                                </span>
                                <span className="text-gray-500">
                                    {frontmatter.date}
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
