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
        I am a software engineer who is an expert at building scalable software
        solutions from startups and large enterprises. I have built design
        systems for GoodLeap, the largest solar financer in the US and
        Confluent, a publicly funded company building event driven architecture.
      </Box>
      <p>
        Throughout my career, I have worked with a wide range of technologies
        and platforms including: Javascript, React, GIS software, image
        rendering, and event based architecture. I have a deep understanding of
        software development methodologies, including Agile and Scrume, and have
        led large-scale development projects from concept to delivery.
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
        In addition to my technical skills, I posses excellent communication and
        leadership skills. I have a proven ability to work collaboratively with
        cross-function teams, and I am adept at managing and mentoring junior
        developers.
      </p>
      <p>
        If you&apos;re interested in learning more about my experience or
        discussing potential projects, please don&apos;t hesitate to get in
        touch.
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
