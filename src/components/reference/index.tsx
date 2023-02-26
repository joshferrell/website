import { Box } from '../box';
import { Card } from '../card';
import styles from './reference.module.scss';

type PropTypes = {
  name: string;
  company: string;
  profilePhotoUrl: string;
  title: string;
  code: string;
};

export const Reference = ({
  name,
  company,
  profilePhotoUrl,
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
      variant="sectionTitle"
      className={styles.blockquote}
      dangerouslySetInnerHTML={{ __html: code }}
    />
    <img className={styles.profile} src={profilePhotoUrl} alt="" />
    <figcaption className={styles.figcaption}>
      <div style={{ fontWeight: 'bold' }}>{name}</div>
      <Box color="secondary">
        {title} at {company}
      </Box>
    </figcaption>
  </Card>
);
