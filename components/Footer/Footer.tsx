import { FunctionComponent } from 'react';

import styles from './Footer.module.scss';
import { IFooterProps } from './Footer.props';
export const Footer: FunctionComponent<IFooterProps> = () => {
  return <footer className={styles.footer}>TheSpaceHuman</footer>;
};
