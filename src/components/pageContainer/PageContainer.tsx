import { PropsWithChildren } from 'react';
import Header from '../header/Header';
import st from './PageContainer.module.scss';

function PageContainer(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className={st.container}>
        <>{props.children}</>
      </div>
    </>
  );
}

export default PageContainer;
