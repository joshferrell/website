import { Manrope } from '@next/font/google';
import Script from 'next/script';

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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7XXK5WVPW1"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7XXK5WVPW1');
        `}
      </Script>
    </html>
  );
}
