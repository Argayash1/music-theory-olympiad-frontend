import React from 'react';
import ContentLoader from 'react-content-loader';

export const ResultItemSkeleton = () => (
  <ContentLoader
    speed={2}
    width={276}
    height={109}
    viewBox='0 0 276 109'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='346' y='204' rx='0' ry='0' width='40' height='5' />
    <rect x='51' y='0' rx='0' ry='0' width='175' height='40' />
    <rect x='0' y='59' rx='0' ry='0' width='276' height='50' />
  </ContentLoader>
);
