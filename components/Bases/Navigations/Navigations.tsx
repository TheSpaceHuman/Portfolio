import { Menu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';

import { INavigationNode } from '../../../helpers/navigations';
import styles from './Navigations.module.css';
import { INavigationsProps } from './Navigations.props';

export const Navigations: FunctionComponent<INavigationsProps> = ({ nodes }) => {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const router: NextRouter = useRouter();

  useEffect(() => {
    setActiveItems([router.route]);
  }, [router.route]);

  const transformNodes: (nodes: INavigationNode[]) => ItemType[] = (nodes) => {
    return nodes.map(({ title, url, icon }) => ({ label: title, key: url, icon }));
  };

  const selectedItem: MenuProps['onClick'] = ({ key }) => {
    router.push(key).catch(console.error);
  };

  return (
    <nav className={styles.navigations}>
      <Menu
        className={styles.navigations__menu}
        mode="horizontal"
        selectedKeys={activeItems}
        items={nodes ? transformNodes(nodes) : []}
        onClick={selectedItem}></Menu>
    </nav>
  );
};
