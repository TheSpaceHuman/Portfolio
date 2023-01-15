import { createContext, PropsWithChildren, useState } from 'react';
import { INavigationNode } from '~/helpers/navigations';

export interface IAppContext {
  menu: INavigationNode[];
  setMenu?: (newMenu: INavigationNode[]) => void;
  loading: boolean;
  setLoading?: (visible: boolean) => void;
}
export const AppContext = createContext<IAppContext>({ menu: [], loading: false });

export const AppContextProvider = ({ children, menu, loading }: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState<INavigationNode[]>(menu);
  const [loadingState, setLoadingState] = useState<boolean>(loading);
  return (
    <AppContext.Provider
      value={{ menu: menuState, setMenu: setMenuState, loading: loadingState, setLoading: setLoadingState }}>
      {children}
    </AppContext.Provider>
  );
};
