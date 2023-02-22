import classNames from 'classnames';
import Link from 'next/link';
import styles from './button-link.module.scss';

type PropTypes = {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export const ButtonLink = ({
  href,
  isExternal = false,
  children,
  variant = 'primary',
}: PropTypes) => {
  const buttonClass = classNames(
    styles.button,
    variant === 'primary' ? styles.primary : styles.secondary
  );

  if (!isExternal) {
    return (
      <Link className={buttonClass} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={buttonClass} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
