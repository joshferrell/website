import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Box } from '../box';
import styles from './card.module.scss';
import { AllHTMLAttributes, createElement } from 'react';

type ElementProps = Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'href'>;

type PropTypes = ElementProps & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: 'callout' | 'flat';
  href?: string;
};

export const Card = ({
  as = 'article',
  children,
  href,
  variant = 'flat',
  ...htmlAttributes
}: PropTypes) => {
  if (href) {
    return (
      <Link href={href} className={styles.card}>
        <article>{children}</article>
      </Link>
    );
  }

  const atomicClasses = classNames(
    styles.card,
    variant !== 'flat' ? styles.callout : ''
  );

  return createElement(
    as,
    { className: atomicClasses, ...htmlAttributes },
    children
  );
};

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
  url: string;
  image: {
    source: any;
    alt: string;
  };
};

export const WorkCard = ({
  title,
  category,
  url,
  description,
  image,
}: WorkProps) => (
  <Card href={url}>
    <div className={styles.imageContainer}>
      <Image src={image.source} alt={image.alt} fill={true} />
    </div>
    <Box as="h3" variant="sectionTitle">
      {title}
    </Box>
    <Box as="small" variant="small">
      {category}
    </Box>
  </Card>
);
