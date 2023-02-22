import { Manrope } from '@next/font/google';

import { Box } from '~/components/box';
import { Link } from '~/components/link';
import './globals.scss';

const manrope = Manrope({
  weight: 'variable',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { href: '/', children: 'Home' },
    { href: '/work', children: 'Portfolio' },
    { href: '/blog', children: 'Blog' },
    { href: '/about', children: 'About' },
    { href: '/contact', children: 'Contact' },
  ];

  return (
    <html lang="en">
      <head />
      <Box
        as="body"
        color="primary"
        background="background"
        className={manrope.className}
      >
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
        {children}
      </Box>
    </html>
  );
}
