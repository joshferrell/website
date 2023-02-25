import NextLink from 'next/link';

import { Box } from '../box';
import styles from './link.module.css';

type BaseProps = {
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
};

const ArrowRight = () => (
  <svg
    height="16"
    width="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path
        d="M10.707,2.293A1,1,0,0,0,9.293,3.707L12.586,7H1A1,1,0,0,0,1,9H12.586L9.293,12.293a1,1,0,1,0,1.414,1.414l5-5a1,1,0,0,0,0-1.414Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

type LinkProps = BaseProps & {
  className?: string;
  color?: 'primary' | 'secondary';
  variant?: 'body' | 'small';
};

export const Link = ({
  isExternal = false,
  href,
  className,
  children,
  variant = 'body',
  color = 'primary',
}: LinkProps) =>
  isExternal ? (
    <Box
      as="a"
      href={href}
      rel="noreferrer"
      variant={variant}
      className={className}
      color={color}
    >
      {children}
    </Box>
  ) : (
    <Box
      as={NextLink}
      variant={variant}
      href={href}
      className={className}
      color={color}
    >
      {children}
    </Box>
  );

export const CardLink = ({ href, children, isExternal = false }: BaseProps) => (
  <Link isExternal={isExternal} href={href} className={styles.cardLink}>
    <Box variant="body">{children}</Box>
    <ArrowRight />
  </Link>
);
