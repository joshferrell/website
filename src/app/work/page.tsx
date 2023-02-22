import { CardLink } from '~/components/link';
import { Container } from '~/components/container';

export const metadata = {
  title: 'Josh Ferrell | Experience',
};

const Blog = () => (
  <Container title="Experience">
    <CardLink isExternal={true} href="https://represent.io/jferrell.pdf">
      Download my full resume
    </CardLink>
  </Container>
);

export default Blog;
