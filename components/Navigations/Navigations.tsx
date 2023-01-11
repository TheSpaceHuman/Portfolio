import cn from 'classnames';
import Hamburger from 'hamburger-react';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, KeyboardEvent, useEffect, useState } from 'react';

import styles from './Navigations.module.scss';
import { INavigationsProps } from './Navigations.props';

export const Navigations: FunctionComponent<INavigationsProps> = ({ nodes }) => {
  const [activeItems, setActiveItems] = useState<string>('');
  const [isOpen, setOpen] = useState(false);
  const router: NextRouter = useRouter();
  const accessibilityHandler: (event: KeyboardEvent) => void = (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      setOpen(!isOpen);
    }
  };

  useEffect(() => {
    setActiveItems(router.route);
  }, [router.route]);

  useEffect(() => {
    addEventListener('resize', () => setOpen(false), { once: true });
  });

  return (
    <nav className={styles.navigations}>
      <button
        className={styles.navigations__hamburger}
        onKeyDown={accessibilityHandler}>
        <Hamburger
          size={21}
          toggled={isOpen}
          toggle={setOpen}
        />
      </button>
      <ul className={cn(styles.navigations__list, { [styles['navigations__list--mobile']]: isOpen })}>
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
