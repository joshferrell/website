import Image from 'next/image';
import styles from './page.module.css';
import { Box } from '~/components/box';
import { CardLink, Link } from '~/components/link';

import profilePhoto from '../../public/josh-profile.webp';

const Home = () => (
  <main id="skip" role="main" className={styles.main}>
    <div className={styles.heading}>
      <Box as="h1" variant="title">
        Hey, I&apos;m&nbsp;
        <Image
          src={profilePhoto}
          alt=""
          aria-hidden={true}
          width={60}
          height={60}
          placeholder="blur"
          style={{
            borderRadius: '100%',
            position: 'relative',
            top: '10px',
          }}
        />
        &nbsp;Josh.
      </Box>
      <Box variant="title">How can I help you?</Box>
    </div>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        margin: '0 1rem',
      }}
    >
      <li>
        <CardLink href="/work">
          I heard you are great at building apps and websites
        </CardLink>
      </li>
      <li>
        <CardLink href="/blog">
          I like reading about design and technology
        </CardLink>
      </li>
      <li>
        <CardLink href="/about">Josh who?</CardLink>
      </li>
    </ul>
    <Link href="/contact">Just saying hi</Link>
  </main>
);

export default Home;
