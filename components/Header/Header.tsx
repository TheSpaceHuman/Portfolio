import cn from 'classnames';
import { FunctionComponent, useContext } from 'react';
import { AppContext } from '~/contexts/app.context';

import { Navigations } from '../Navigations/Navigations';
import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';

export const Header: FunctionComponent<IHeaderProps> = ({ className }) => {
  const { menu } = useContext(AppContext);
  return (
    <header className={cn(styles.header, className)}>
      <Navigations nodes={menu}></Navigations>
    </header>
  );
};
