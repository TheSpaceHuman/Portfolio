import { FunctionComponent, useContext } from 'react';

import { AppContext } from '../../../contexts/app.context';
import { Navigations } from '../../Bases/Navigations/Navigations';

export const Header: FunctionComponent = () => {
  const { menu } = useContext(AppContext);
  return (
    <header>
      <Navigations nodes={menu}></Navigations>
    </header>
  );
};
