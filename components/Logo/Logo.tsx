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
      className={cn(styles.logo, className, 'animate-heart-beat')}>
      <Image
        src="/images/logo.png"
        className={styles.logo__img}
        alt={alt}
        width={42}
        height={42}
      />
    </Link>
  );
};
