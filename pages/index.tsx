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
        <div>
            <ul className="list-disc">
                {posts.map(({ slug, frontmatter }) => (
                    <li key={slug} className="my-6">
                        <Link href={`/post/${slug}`}>
                            <a className="underline underline-offset-1">
                                {frontmatter.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
