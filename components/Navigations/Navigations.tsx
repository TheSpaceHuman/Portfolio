import { Menu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import cn from 'classnames';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { INavigationNode } from '~/helpers/navigations';

import styles from './Navigations.module.scss';
import { INavigationsProps } from './Navigations.props';


export const Navigations: FunctionComponent<INavigationsProps> = ({ nodes }) => {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const router: NextRouter = useRouter();

  useEffect(() => {
    setActiveItems([router.route]);
  }, [router.route]);

  const transformNodes: (nodes: INavigationNode[] | undefined) => ItemType[] = (nodes) => {
    return nodes ? nodes.map(({ title, url, icon }) => ({ label: title, key: url, icon })) : [];
  };

  const selectedItem: MenuProps['onClick'] = ({ key }) => {
    router.push(key).catch(console.error);
  };

  return (
    <nav className={cn(styles.navigations, 'navigations')}>
      <div className={styles.navigations__menu}>
        <Menu
          mode="horizontal"
          selectedKeys={activeItems}
          items={transformNodes(nodes)}
          onClick={selectedItem}
        />
      </div>
    </nav>
  );
};
