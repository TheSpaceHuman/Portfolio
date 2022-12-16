import { useRouter } from 'next/router';
import { FunctionComponent, MouseEventHandler } from 'react';

import { IActiveLinkProps } from './ActiveLink.props';

const ActiveLink: FunctionComponent<IActiveLinkProps> = ({ children, href }) => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    router.push(href).catch(console.error);
  };

  return (
    <a
      href={href}
      onClick={handleClick}>
      {children}
    </a>
  );
};

export default ActiveLink;
