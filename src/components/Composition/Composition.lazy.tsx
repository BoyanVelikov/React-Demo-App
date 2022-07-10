import React, { lazy, Suspense } from 'react';

const LazyComposition = lazy(() => import('./Composition'));

const Composition = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyComposition {...props} />
  </Suspense>
);

export default Composition;
