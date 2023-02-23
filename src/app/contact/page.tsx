import { Box } from '~/components/box';
import { Container } from '~/components/container';
import { VisuallyHidden } from '~/components/visually-hidden';
import { ButtonLink } from '~/components/button-link';
import { Link } from '~/components/link';
import { Card } from '~/components/card';
import { ProfileImage } from '~/components/profile-image';

export const metadata = {
  title: 'Josh Ferrell | Contact',
};

const Contact = () => {
  const links = [
    { name: 'Twitter', href: 'https://twitter.com/norablindsided' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joshferrell/' },
    { name: 'GitHub', href: 'https://github.com/joshferrell/' },
  ];

  return (
    <Container
      title="Get in touch"
      subtitle="I'm always looking to collaborate on cool projects and with great people."
    >
      <Card variant="callout">
        <ProfileImage size={120} />
        <header style={{ textAlign: 'center' }}>
          <Box as="h2" variant="subtitle" style={{ marginBottom: '.35rem' }}>
            Josh Ferrell
          </Box>
          <Box color="secondary">Staff Software Engineer</Box>
        </header>
        <ul style={{ display: 'flex', flexFlow: 'row wrap', gap: '1rem' }}>
          <li>
            <ButtonLink
              variant="secondary"
              href="mailto:josh@joshferrell.me?subject=Would like to work together"
            >
              Send an e-mail
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              isExternal={true}
              variant="secondary"
              href="https://calendly.com/joshferrell"
            >
              Have a call
            </ButtonLink>
          </li>
        </ul>
      </Card>
      <VisuallyHidden as="h3">Social</VisuallyHidden>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'row wrap',
          gap: '2.5rem',
          margin: '2.5rem auto 0',
          maxWidth: 'fit-content',
        }}
      >
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link variant="small" isExternal href={href}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Contact;
