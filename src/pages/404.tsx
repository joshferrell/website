import { Manrope } from 'next/font/google';

import '../app/globals.css';

import { Box } from '~/components/box';
import { ArrowRight, Link } from '~/components/link';
import { ButtonLink } from '~/components/button-link';

const manrope = Manrope({
  weight: 'variable',
  subsets: ['latin'],
});

const Custom404 = () => {
  const links = [
    { href: '/', children: 'Home' },
    { href: '/work', children: 'Experience' },
    { href: '/blog', children: 'Blog' },
    { href: '/about', children: 'About' },
    { href: '/contact', children: 'Contact' },
  ];

  return (
    <Box
      color="primary"
      background="background"
      className={manrope.className}
      style={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <header role="banner">
        <a
          href="#skip"
          accessKey="s"
          style={{ position: 'absolute', left: '-1000px', zIndex: 2 }}
        >
          Skip to content.
        </a>
        <nav>
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.8rem',
              flexWrap: 'wrap',
              listStyleType: 'none',
              padding: '1.5rem',
            }}
          >
            {links.map((props) => (
              <li key={props.children}>
                <Link {...props} color="secondary" />
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main
        role="main"
        id="skip"
        style={{
          placeItems: 'center',
          minHeight: '100%',
          display: 'grid',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Box
            variant="subtitle"
            color="highlight"
            style={{ fontWeight: '500' }}
          >
            404
          </Box>
          <Box as="h1" variant="title" style={{ marginBottom: '1.5rem' }}>
            Page not found
          </Box>
          <Box as="p" variant="sectionTitle">
            Sorry we couldn&apos;t find the page you were looking for.
          </Box>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.2rem',
              marginTop: '2.5rem',
            }}
          >
            <ButtonLink href="/">Go back home </ButtonLink>
            <ButtonLink variant="secondary" href="/contact">
              Contact me
              <ArrowRight
                style={{
                  color: 'var(--text-secondary)',
                  marginLeft: '.5rem',
                }}
              />
            </ButtonLink>
          </div>
        </div>
      </main>
    </Box>
  );
};

export default Custom404;
