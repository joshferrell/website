'use client';

import { useState } from 'react';
import styles from './collapse.module.css';

const ArrowDown = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={2}
    >
      <polyline
        fill="none"
        points="1,8 12,16 23,8 "
        stroke="currentColor"
        strokeLinecap="butt"
      />
    </g>
  </svg>
);

type CollapseProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export const Collapse = ({
  header,
  children,
  defaultOpen = false,
}: CollapseProps) => {
  const [isOpen, toggleOpen] = useState(defaultOpen);
  return (
    <details
      className={styles.collapse}
      open={isOpen}
      onToggle={() => toggleOpen(!isOpen)}
    >
      <summary className={styles.summary}>
        <div>{header}</div>
        <ArrowDown style={{ transform: `rotate(${isOpen ? '180deg' : 0})` }} />
      </summary>
      <div className={styles.detailsContent}>{children}</div>
    </details>
  );
};
