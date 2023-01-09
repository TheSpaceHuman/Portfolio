import cn from 'classnames';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';

import styles from './Navigations.module.scss';
import { INavigationsProps } from './Navigations.props';

export const Navigations: FunctionComponent<INavigationsProps> = ({ nodes }) => {
  const [activeItems, setActiveItems] = useState<string>('');
  const router: NextRouter = useRouter();

  useEffect(() => {
    setActiveItems(router.route);
  }, [router.route]);

  return (
    <nav className={styles.navigations}>
      <ul className={styles.navigations__list}>
        {nodes.map((n, index) => (
          <li
            className={cn(styles.navigations__item, { [styles['navigations__item--active']]: n.url === activeItems })}
            key={n.url}
            data-index={++index}>
            <Link href={n.url}>{n.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
