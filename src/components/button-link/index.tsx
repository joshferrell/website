import classNames from 'classnames';
import Link from 'next/link';
import styles from './button-link.module.scss';

type PropTypes = {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const ArrowLeft = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    height="16"
    width="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="var(--text-secondary)">
      <path
        d="M15,7H3.414L6.707,3.707A1,1,0,0,0,5.293,2.293l-5,5a1,1,0,0,0,0,1.414l5,5a1,1,0,1,0,1.414-1.414L3.414,9H15a1,1,0,0,0,0-2Z"
        fill="var(--text-secondary)"
      />
    </g>
  </svg>
);

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

export const BackButton = ({
  children,
  ...rest
}: Omit<PropTypes, 'isExternal'>) => (
  <ButtonLink {...rest}>
    <ArrowLeft
      style={{ marginRight: '.6rem', position: 'relative', top: '1px' }}
    />
    {children}
  </ButtonLink>
);
