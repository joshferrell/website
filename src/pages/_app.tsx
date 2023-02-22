import { Manrope } from '@next/font/google';
import Script from 'next/script';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { ButtonLink } from '~/components/button-link';
import { Box } from '~/components/box';
import { Link } from '~/components/link';
import { BlogPage } from '~/components/container';
import '../app/globals.scss';

// TODO: see if you can fully migrate to /app directory for less repeat.

const manrope = Manrope({
  weight: 'variable',
  subsets: ['latin'],
});

import React from 'react';

const ArrowLeft = () => (
  <svg
    height="16"
    width="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'relative', top: '1px', paddingRight: '.6rem' }}
  >
    <g fill="var(--text-secondary)">
      <path
        d="M15,7H3.414L6.707,3.707A1,1,0,0,0,5.293,2.293l-5,5a1,1,0,0,0,0,1.414l5,5a1,1,0,1,0,1.414-1.414L3.414,9H15a1,1,0,0,0,0-2Z"
        fill="var(--text-secondary)"
      />
    </g>
  </svg>
);

const components = {
  h1: (props: any) => (
    <Box variant="title" as="h1" {...props} style={{ textAlign: 'center' }} />
  ),
  h2: (props: any) => <Box variant="subtitle" as="h2" {...props} />,
  p: (props: any) => <Box variant="body" as="p" {...props} />,
  h3: (props: any) => <Box variant="sectionTitle" as="h3" {...props} />,
  ul: (props: any) => (
    <ul style={{ listStyle: 'circle', padding: '0 1rem' }} {...props} />
  ),
};

export default function RootLayout({ Component, pageProps }: AppProps) {
  const links = [
    { href: '/', children: 'Home' },
    { href: '/work', children: 'Portfolio' },
    { href: '/blog', children: 'Blog' },
    { href: '/about', children: 'About' },
    { href: '/contact', children: 'Contact' },
  ];

  return (
    <Box
      color="primary"
      background="background"
      className={manrope.className}
      style={{ minHeight: '100vh' }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* SEO Stuff */}
        <meta
          name="description"
          content="Joshua Ferrell, Staff Software Engineer specializing in frontend software development. Follow blog for design system and Javascript news."
        />
        <meta
          name="keywords"
          content="Design Systems, React, Software Engineer, Typescript, Javascript"
        />

        {/* Twitter stuff */}
        <meta name="twitter:creator" content="@norablindsided" />
        <meta name="twitter:site" content="@norablindsided" />
        <meta name="twitter:title" content="Joshua Ferrell" />
        <meta
          name="twitter:description"
          content="Come see how Josh Ferrell can transform your business and increase developer productivity."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0d0d0d" />
        <meta name="theme-color" content="#0d0d0d" />

        <link rel="canonical" href="http://joshferrell.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <MDXProvider components={components}>
        <BlogPage>
          <ButtonLink href="/blog" variant="secondary">
            <ArrowLeft />
            Back to blog
          </ButtonLink>
          <Component {...pageProps} />
        </BlogPage>
      </MDXProvider>
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
    </Box>
  );
}
