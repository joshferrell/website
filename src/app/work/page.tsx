import { CardLink } from '~/components/link';
import { Container } from '~/components/container';

export const metadata = {
  title: 'Josh Ferrell | Experience',
};

const Blog = () => (
  <Container title="Experience">
    <CardLink isExternal={true} href="/joshua-ferrell-resume.pdf">
      Download my full resume
    </CardLink>
  </Container>
);

export default Blog;
