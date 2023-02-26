import { Box } from '../box';
import { ButtonLink } from '../button-link';
import { Card } from '../card';
import { ArrowRight } from '../link';
import { ProfileImage } from '../profile-image';

import styles from './cta.module.css';

export const CTA = () => (
  <Card className={styles.cta}>
    <ProfileImage size={125} />
    <div>
      <Box variant="sectionTitle" style={{ fontWeight: 500 }}>
        Looking for a skilled software engineer?
      </Box>
      <p style={{ margin: '.5rem 0 1.5rem' }}>
        I&apos;m open to new opportunities! Let&apos;s work together to bring
        your project to life. Contact me today to discuss your needs and how I
        can help.
      </p>
      <ButtonLink variant="secondary" href="/contact">
        Get in touch
        <ArrowRight
          style={{
            color: 'var(--text-secondary)',
            position: 'relative',
            top: '1px',
            paddingLeft: '.8rem',
          }}
        />
      </ButtonLink>
    </div>
  </Card>
);
