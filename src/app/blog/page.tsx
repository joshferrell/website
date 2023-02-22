import { Container } from '~/components/container';
import { BlogCard } from '~/components/card';

import floatLabel from '../../../public/float-label.webp';

enum Categories {
  WEB_DESIGN = 'Web Design',
}

export const metadata = {
  title: 'Josh Ferrell | Blog',
};

const Blog = () => (
  <Container title="Thoughts">
    <BlogCard
      url="/blog/float-labels"
      title="The problem with float labels"
      category={Categories.WEB_DESIGN}
      image={{
        source: floatLabel,
        alt: 'The float label form interaction by Matt D Smith',
      }}
    />
  </Container>
);

export default Blog;
