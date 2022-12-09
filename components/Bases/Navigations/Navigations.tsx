import { AppstoreOutlined, BookOutlined, BuildOutlined, HomeOutlined, ProfileOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';

import styles from './Navigations.module.css';
import { NavigationsProps } from './Navigations.props';

export const Navigations: FunctionComponent<NavigationsProps> = ({ nodes }) => {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const [menu, setMenu] = useState<ItemType[]>([]);
  const router: NextRouter = useRouter();

  useEffect(() => {
    setActiveItems([router.route]);
  }, [router.route]);

  useEffect(() => {
    if (nodes) {
      setMenu(nodes.map((n) => ({ label: n.title, key: n.url, icon: getIcon(n.title) })));
    }
  }, [nodes]);

  const getIcon: (title: string) => ReactNode = (icon) => {
    switch (icon) {
      case 'Home':
        return <HomeOutlined />;
      case 'Blog':
        return <ProfileOutlined />;
      case 'Work Projects':
        return <AppstoreOutlined />;
      case 'Pet Projects':
        return <BuildOutlined />;
      case 'Resources':
        return <BookOutlined />;
      default:
        return false;
    }
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
        items={menu}
        onClick={selectedItem}></Menu>
    </nav>
  );
};
