import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export const getStaticProps = async ({ params: { slug } }) => {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

interface postPageProps {
    frontmatter: {
        [key: string]: any;
    };
    content: string;
}

const PostPage = ({ frontmatter, content }: postPageProps) => {
    return (
        <div className="prose dark:prose-invert mx-auto">
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    );
};

export default PostPage;
