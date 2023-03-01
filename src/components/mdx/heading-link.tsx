'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { Box, BoxProps } from '../box';
import styles from './heading-link.module.css';

export const HeadingLink = ({ children, ...htmlAttributes }: BoxProps) => {
  const pathname = usePathname();
  const id = useMemo(
    () =>
      children
        ?.toString()
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, ''),
    [children]
  );

  const url = `${pathname}#${id}`;

  return (
    <Box id={id} {...htmlAttributes}>
      <Link
        href={url}
        className={styles.headingLink}
        onClick={() =>
          navigator.clipboard.writeText(`https://joshferrell.me${url}`)
        }
      >
        {children}
      </Link>
    </Box>
  );
};
