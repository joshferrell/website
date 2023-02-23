import Image from 'next/image';
import { Box } from '../box';
import styles from './container.module.scss';

type PropTypes = {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
};

export const Container = ({ title, subtitle, image, children }: PropTypes) => (
  <main className={styles.main}>
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
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={647}
          height={364}
          style={{
            borderRadius: '1rem',
            width: '100%',
            height: 'auto',
            marginTop: '4rem',
          }}
        />
      )}
    </header>
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

export const BlogPage = ({ children }: { children: React.ReactNode }) => (
  <main className={styles.main}>
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
