import React from 'react';
import ContentLoader from 'react-content-loader';

export const SliderCardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={370}
    height={370}
    viewBox='0 0 370 370'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='40' ry='40' width='370' height='370' />
    <rect x='346' y='204' rx='0' ry='0' width='40' height='5' />
  </ContentLoader>
);
