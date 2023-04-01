import Image from 'next/image';
import classNames from 'classnames';

import { Box } from '../box';
import { BackButton } from '../button-link';
import styles from './container.module.css';
import { CTA } from '../cta';

type PropTypes = {
  title: string;
  subtitle?: string;
  fullWidth?: boolean;
  hideCTA?: boolean;
  image?: {
    src: string;
    alt: string;
    blurUrl: string;
  };
  backLink?: {
    href: string;
    text: string;
  };
  headerType?: 'postHeader' | 'header';
  children: React.ReactNode;
};

type HeaderProps = {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    blurUrl: string;
    alt: string;
  };
};

const Header = ({ title, subtitle }: HeaderProps) => (
  <header style={{ textAlign: 'center', margin: '0 auto' }}>
    <Box as="h1" variant="title">
      {title}
    </Box>
    {subtitle && (
      <Box
        variant="sectionTitle"
        color="secondary"
        style={{ marginTop: '1.5rem' }}
      >
        {subtitle}
      </Box>
    )}
  </header>
);

const PostHeader = ({ title, subtitle, image }: HeaderProps) => (
  <header style={{ textAlign: 'left', margin: '0 auto' }}>
    {subtitle && (
      <Box variant="sectionTitle" color="highlight">
        {subtitle}
      </Box>
    )}
    <Box as="h1" variant="title">
      {title}
    </Box>
    <Box
      color="secondary"
      variant="sectionTitle"
      style={{ marginTop: '1.5rem' }}
    >
      By Joshua Ferrell
    </Box>
    {image && (
      <Image
        src={image.src}
        alt={image.alt}
        blurDataURL={image.blurUrl}
        placeholder="blur"
        width={647}
        height={364}
        quality={90}
        style={{
          borderRadius: '1rem',
          width: '100%',
          height: 'auto',
          marginTop: '4rem',
        }}
      />
    )}
  </header>
);

export const Container = ({
  title,
  subtitle,
  headerType = 'header',
  hideCTA = false,
  image,
  fullWidth = false,
  backLink,
  children,
}: PropTypes) => {
  const headerProps: HeaderProps = {
    title,
    subtitle,
    image,
  };

  return (
    <main
      id="skip"
      role="main"
      className={classNames(
        styles.main,
        !fullWidth ? styles.mainPartialWidth : ''
      )}
    >
      {backLink && (
        <div style={{ marginBottom: '4rem' }}>
          <BackButton variant="secondary" href={backLink.href}>
            {backLink.text}
          </BackButton>
        </div>
      )}
      {headerType === 'header' ? (
        <Header {...headerProps} />
      ) : (
        <PostHeader {...headerProps} />
      )}
      <section
        style={{
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        {children}
      </section>
      {!hideCTA && <CTA />}
    </main>
  );
};

export const BlogPage = ({ children }: { children: React.ReactNode }) => (
  <main id="skip" role="main" className={styles.main}>
    <section
      style={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      {children}
    </section>
  </main>
);
