import { AppstoreOutlined, BookOutlined, BuildOutlined, HomeOutlined, ProfileOutlined } from '@ant-design/icons';

export interface INavigationNode {
  title: string;
  url: string;
  icon?: JSX.Element;
}

export const nodes: INavigationNode[] = [
  {
    title: 'Home',
    url: '/',
    icon: <HomeOutlined />,
  },
  {
    title: 'Blog',
    url: '/blog',
    icon: <ProfileOutlined />,
  },
  {
    title: 'Work Projects',
    url: '/work-projects',
    icon: <AppstoreOutlined />,
  },
  {
    title: 'Pet Projects',
    url: '/pet-projects',
    icon: <BuildOutlined />,
  },
  {
    title: 'Resources',
    url: '/resources',
    icon: <BookOutlined />,
  },
];
