import { Manrope } from 'next/font/google';
import Script from 'next/script';
import type { Metadata } from 'next';

import { Box } from '~/components/box';
import { Link } from '~/components/link';
import './globals.css';

const manrope = Manrope({
  weight: 'variable',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Josh Ferrell',
  description:
    'Josh Ferrell, Staff Software Engineer specializing in front-end software development. Follow blog for design system and Javscript news',
  keywords: 'Design Systems, React, Software Engineer, Typescript, Javascript',
  twitter: {
    card: 'summary_large_image',
    title: 'Joshua Ferrell | Design Systems and Front-end Technical Lead',
    creator: '@norablindsided',
    site: '@norablindsided',
    description:
      'Staff Software Engineer specializing in front-end software development. Follow blog for design system and Javscript news',
    images: {
      url: 'https://www.joshferrell.me/social-image.png',
      alt: 'Josh Ferrell, staff software engineer',
    },
  },
  openGraph: {
    title: 'Josh Ferrell',
    description:
      'Josh Ferrell, staff software engineer specializing in front-end software development. Follow blog for design and Javascript news',
    url: 'https://www.joshferrell.me',
    siteName: 'Josh Ferrell',
    images: [
      {
        url: 'https://www.joshferrell.me/social-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { href: '/', children: 'Home' },
    { href: '/work', children: 'Experience' },
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
        {children}
      </Box>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7XXK5WVPW1"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-7XXK5WVPW1');
        `}
      </Script>
    </html>
  );
}
