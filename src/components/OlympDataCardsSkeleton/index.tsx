import React from 'react';
import ContentLoader from 'react-content-loader';

export const OlympDataCardsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1300}
    height={599}
    viewBox='0 0 1300 599'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='346' y='204' rx='0' ry='0' width='40' height='5' />
    <rect x='0' y='0' rx='40' ry='40' width='750' height='599' />
    <rect x='770' y='0' rx='40' ry='40' width='530' height='599' />
  </ContentLoader>
);
