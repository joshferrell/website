import { Box } from '~/components/box';
import { ButtonLink } from '~/components/button-link';
import { ArrowRight } from '~/components/link';

const NotFound = () => (
  <main
    role="main"
    id="skip"
    style={{
      margin: '10rem auto',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <Box variant="subtitle" color="highlight" style={{ fontWeight: '500' }}>
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
);

export default NotFound;
