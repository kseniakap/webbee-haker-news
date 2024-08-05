import { PropsWithChildren, Suspense } from 'react';
import Header from '../header/Header';
import Loader from '../loader/Loader';
import st from './PageContainer.module.scss';

function PageContainer(props: PropsWithChildren) {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <div className={st.container}>{props.children}</div>
    </Suspense>
  );
}

export default PageContainer;
