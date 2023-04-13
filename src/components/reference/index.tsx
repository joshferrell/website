import Image from 'next/image';

import { Box } from '../box';
import { Card } from '../card';
import styles from './reference.module.scss';

type PropTypes = {
  name: string;
  company: string;
  profilePhotoUrl: string;
  title: string;
  code: string;
  blurUrl: string;
};

export const Reference = ({
  name,
  company,
  profilePhotoUrl,
  blurUrl,
  title,
  code,
}: PropTypes) => (
  <Card
    as="figure"
    className={styles.figure}
    style={{
      maxWidth: '60rem',
      margin: '0 auto',
      textAlign: 'left',
    }}
  >
    <Box
      as="blockquote"
      className={styles.blockquote}
      dangerouslySetInnerHTML={{ __html: code }}
    />
    <Image
      className={styles.profile}
      width={288}
      height={288}
      blurDataURL={blurUrl}
      placeholder="blur"
      src={profilePhotoUrl}
      alt=""
    />
    <figcaption className={styles.figcaption}>
      <div style={{ fontWeight: 'bold' }}>{name}</div>
      <Box color="secondary">
        {title} at {company}
      </Box>
    </figcaption>
  </Card>
);
