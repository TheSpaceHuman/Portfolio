import { createContext, PropsWithChildren, useState } from 'react';
import { INavigationNode } from '~/helpers/navigations';

export interface IAppContext {
  menu: INavigationNode[];
  setMenu?: (newMenu: INavigationNode[]) => void;
}
export const AppContext = createContext<IAppContext>({ menu: [] });

export const AppContextProvider = ({ children, menu }: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState<INavigationNode[]>(menu);
  return <AppContext.Provider value={{ menu: menuState, setMenu: setMenuState }}>{children}</AppContext.Provider>;
};
