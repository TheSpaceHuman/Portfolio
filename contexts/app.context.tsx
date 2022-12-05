import { createContext, PropsWithChildren, useState } from 'react';

import { NavigationNode } from '../pages/api/navigations';

export interface IAppContext {
  menu: NavigationNode[];
  setMenu?: (newMenu: NavigationNode[]) => void;
}
export const AppContext = createContext<IAppContext>({ menu: [] });

export const AppContextProvider = ({ children, menu }: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState<NavigationNode[]>(menu);
  return <AppContext.Provider value={{ menu: menuState, setMenu: setMenuState }}>{children}</AppContext.Provider>;
};
