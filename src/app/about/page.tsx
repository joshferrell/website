import Image from 'next/image';
import { Box } from '~/components/box';
import { ButtonLink } from '~/components/button-link';
import { Container } from '~/components/container';
import { NumberCallout } from '~/components/number-callout';
import rockLobster from '../../../public/rock-lobster.webp';

export const metadata = {
  title: 'Josh Ferrell | About Me',
};

const About = () => (
  <Container title="Meet Josh">
    <Image
      src={rockLobster}
      alt="Josh screaming in a large stock pot being cooked by a giant lobster."
      width={647}
      height={364}
      placeholder="blur"
      style={{ borderRadius: '1rem', width: '100%', height: 'auto' }}
    />
    <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column' }}>
      <Box as="p" variant="sectionTitle">
        Hey there! I&apos;m a software engineer with a decade of experience in
        creating beautiful, accessible, and user-focused design systems and
        front-end solutions.
      </Box>
      <p>
        My journey began in print design, which allowed me to sharpen my design
        skills and develop an appreciation for design craft and details. As I got
        deeper into design, I found that I really loved web design and began
        designing digital experiences.
      </p>
      <p>
        At some point, I began building those experiences, and as my passion for
        development grew, I delved deep into a diverse range of technologies
        including JavaScript, GIS software, image rendering, image proofing,
        event-based architecture, and React.js. I deeply enjoy building
        user-friendly solutions that not only meet, but surpass the expectations
        of clients and end-users.
      </p>

      <aside
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '35rem',
          width: '100%',
          margin: '0 auto',
          gap: '2.5rem',
        }}
      >
        <NumberCallout title="10" subtitle="Years of experience" />
        <NumberCallout title="4" subtitle="Design systems built" />
        <NumberCallout title="7" subtitle="Years working with React" />
      </aside>

      <p>
        Having a solid footing in both design and development, I&apos;m able to
        seemlessly merge aesthetics with functionality, ensuring that every
        project I&apos;m a part of is meaningfully crafted. Collaboration and
        communication are key to my approach, and these skills have been
        invaluation in my success as a team leader and my ability to work
        hand-in-hand wiith cross-functional teams.
      </p>
      <p>
        Outside of designing and coding, you can catch me trying out new recipes
        or gaming. If you&apos;d like to collaborate, or just say hi, don&apso;t
        hesitate to reach out!
      </p>

      <div style={{ marginTop: '1em' }}>
        <ButtonLink href="/contact" variant="primary">
          Get in touch
        </ButtonLink>
      </div>
    </div>
  </Container>
);

export default About;
