import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const f = () => {
  console.debug(1);
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  f();
  res.status(200).json({ name: 'John Doe' });
}
