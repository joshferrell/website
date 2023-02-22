import Head from 'next/head';

import { Box } from '../box';
import styles from './container.module.scss';

type PropTypes = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Container = ({ title, subtitle, children }: PropTypes) => (
  <main className={styles.main}>
    <header style={{ textAlign: 'center', margin: '0 auto' }}>
      <Box as="h1" variant="title">
        {title}
      </Box>
      {subtitle && (
        <Box variant="sectionTitle" style={{ marginTop: '1.5rem' }}>
          {subtitle}
        </Box>
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
