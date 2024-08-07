import { PropsWithChildren, Suspense } from 'react';
import Header from '../header/Header';
import Loader from '../loader/Loader';
import styles from './PageContainer.module.scss';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <div className={styles.container}>{props.children}</div>
    </Suspense>
  );
};

export default PageContainer;
