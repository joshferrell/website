import { ElementType, createElement } from 'react';
import styles from './visually-hidden.module.css';

type PropTypes = {
  as?: ElementType;
  children: React.ReactNode;
};

export const VisuallyHidden = ({ as = 'span', children }: PropTypes) => {
  return createElement(as, { className: styles.visuallyHidden }, children);
};
