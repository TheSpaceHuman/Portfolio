import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ILogoProps } from '~/components/Logo/Logo.props';

import styles from './Logo.module.scss';

export const Logo: FC<ILogoProps> = ({ link, alt = 'Page logotype', className }) => {
  return (
    <Link
      href={link}
      className={cn(styles.logo, className, 'animate-pulse-interactive')}>
        <figure className={styles.logo__figure}>
            <Image src={'/icons/noun-space-780626.svg'} className={styles.logo__icon} width={90} height={75} alt={alt} />
            <figcaption>TheSpaceHuman</figcaption>
        </figure>
    </Link>
  );
};
