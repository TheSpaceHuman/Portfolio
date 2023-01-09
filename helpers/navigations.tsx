export interface INavigationNode {
  title: string;
  url: string;
}

export const nodes: INavigationNode[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'Work Projects',
    url: '/work-projects',
  },
  {
    title: 'Pet Projects',
    url: '/pet-projects',
  },
  {
    title: 'Resources',
    url: '/resources',
  },
];
