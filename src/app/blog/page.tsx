import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { Container } from '~/components/container';
import { BlogCard } from '~/components/card';

export const metadata = {
  title: 'Josh Ferrell | Blog',
};

const Blog = () => {
  const posts = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <Container title="Thoughts">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          url={`/blog/${post.slug}`}
          title={post.title}
          category={post.category}
          image={{ source: post.image, alt: post.imageAlt }}
        />
      ))}
    </Container>
  );
};

export default Blog;
