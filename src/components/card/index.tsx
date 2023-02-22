import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Box } from '../box';
import styles from './card.module.scss';

type PropTypes = {
  children: React.ReactNode;
  variant?: 'callout' | 'flat';
  href?: string;
};

export const Card = ({ children, href, variant = 'flat' }: PropTypes) =>
  href ? (
    <Link href={href} className={styles.card}>
      <article>{children}</article>
    </Link>
  ) : (
    <article
      className={classNames(
        styles.card,
        variant !== 'flat' ? styles.callout : ''
      )}
    >
      {children}
    </article>
  );

type BlogProps = {
  title: string;
  category: string;
  url: string;
  image: {
    source: any;
    alt: string;
  };
};

export const BlogCard = ({ title, category, url, image }: BlogProps) => (
  <Card href={url}>
    <div className={styles.imageContainer}>
      <Image src={image.source} alt={image.alt} fill={true} />
    </div>
    <Box as="h2" variant="sectionTitle">
      {title}
    </Box>
    <Box as="small" variant="small">
      {category}
    </Box>
  </Card>
);

type WorkProps = {
  title: string;
  category: string;
  description: string;
  image: {
    source: any;
    alt: string;
  };
};

export const WorkCard = ({
  title,
  category,
  description,
  image,
}: WorkProps) => (
  <Card href="/">
    <div className={styles.imageContainer}>
      <Image src={image.source} alt={image.alt} fill={true} />
    </div>
    <Box as="h2" variant="sectionTitle">
      {title}
    </Box>
    <Box as="small" variant="small">
      {category}
    </Box>
  </Card>
);
