import { FunctionComponent } from 'react';

import { Empty } from '../components/Bases/Empty/Empty';
import { withLayout } from '../layouts/Layout';

const Page404: FunctionComponent = () => {
  return (
    <Empty
      title={'404'}
      subtitle={'Ups...'}
      description={'It looks like one of the developers fell asleep'}
    />
  );
};

export default withLayout(Page404, true);
