import React from 'react';
import ContentLoader from 'react-content-loader';

export const FullAdvertSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1150}
    height={370}
    viewBox='0 0 1150 370'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='40' ry='40' width='1150' height='370' />
  </ContentLoader>
);
