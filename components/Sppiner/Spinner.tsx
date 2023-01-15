import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { ISpinnerProps } from '~/components/Sppiner/Spinner.props';

import styles from './Spinner.module.scss';

export const Spinner: FC<ISpinnerProps> = ({ className }) => {
  return (
    <div className={cn(styles.spinner, className)}>
      <Image
        className={'animate-pulse'}
        src={'/images/spinner.png'}
        alt={'Spinner'}
        width={64}
        height={64}
      />
    </div>
  );
};
