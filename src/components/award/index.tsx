import Image from 'next/image';

import { Box } from '../box';
import { Collapse } from '../collapse';

import styles from './award.module.css';

type PropTypes = {
  name: string;
  company?: string;
  year: number;
  code: string;
  companyImageUrl: string;
  isFeatured?: boolean;
  blurUrl: string;
};

export const AwardToggle = ({
  name,
  company,
  year,
  blurUrl,
  code,
  companyImageUrl,
  isFeatured = false,
}: PropTypes) => {
  const header = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Image
        className={styles.image}
        src={companyImageUrl}
        alt=""
        blurDataURL={blurUrl}
        placeholder="blur"
        aria-hidden={true}
        width={75}
        height={75}
        quality={100}
        style={{ borderRadius: '100%' }}
      />
      <div>
        <Box color="secondary">
          {company && <>{company} &#x2022;&nbsp;</>}
          {year}
        </Box>
        <Box className={styles.subtitle} variant="subtitle">
          {name}
        </Box>
      </div>
    </div>
  );

  return (
    <Collapse defaultOpen={isFeatured} header={header}>
      <div
        style={{ display: 'flex', gap: '1.5rem', flexFlow: 'column' }}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </Collapse>
  );
};
