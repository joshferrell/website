import { allWorks } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { CardLink } from '~/components/link';
import { BlogCard } from '~/components/card';
import { Container } from '~/components/container';

export const metadata = {
  title: 'Josh Ferrell | Experience',
};

const Work = () => {
  const posts = allWorks
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <Container title="Experience">
      <CardLink isExternal={true} href="/joshua-ferrell-resume.pdf">
        Download my full resume
      </CardLink>
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          url={`/work/${post.slug}`}
          title={post.title}
          category={post.category}
          image={{ source: post.image, alt: post.imageAlt }}
        />
      ))}
    </Container>
  );
};

export default Work;
