import { AppstoreOutlined, BookOutlined, BuildOutlined, HomeOutlined, ProfileOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../../contexts/app.context';

export const Header: FunctionComponent = () => {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const router: NextRouter = useRouter();
  const { menu } = useContext(AppContext);

  useEffect(() => {
    // TODO double render
    setActiveItems([router.route]);
  }, [router.route]);

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
    <header>
      <Menu
        mode="horizontal"
        selectedKeys={activeItems}
        items={menu && menu.map((n) => ({ label: n.title, key: n.url, icon: getIcon(n.title) }))}
        onClick={selectedItem}></Menu>
    </header>
  );
};
