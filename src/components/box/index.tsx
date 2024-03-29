import classNames from 'classnames';
import { AllHTMLAttributes, createElement, ElementType } from 'react';
import styles from './typography.module.css';

type ElementProps = Omit<
  AllHTMLAttributes<HTMLElement>,
  'as' | 'color' | 'background'
>;

export interface BoxProps extends ElementProps {
  variant?: 'title' | 'subtitle' | 'sectionTitle' | 'body' | 'small';
  as?: ElementType;
  color?: 'primary' | 'secondary' | 'inverted' | 'highlight';
  background?: 'transparent' | 'background' | 'surface-01' | 'surface-02';
}

export const Box = ({
  as = 'div',
  variant = 'body',
  color = 'primary',
  background = 'transparent',
  className,
  ...htmlAttributes
}: BoxProps) => {
  const atomicClasses = classNames(
    styles[variant],
    styles[color],
    styles[background],
    className
  );

  return createElement(as, { className: atomicClasses, ...htmlAttributes });
};
