import { NextApiRequest, NextApiResponse } from 'next';

export interface NavigationNode {
  title: string;
  url: string;
}

const nodes: NavigationNode[] = [
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

export default function response(req: NextApiRequest, res: NextApiResponse<NavigationNode[]>) {
  res.status(200).json(nodes);
}
