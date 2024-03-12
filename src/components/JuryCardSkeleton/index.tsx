import React from 'react';
import ContentLoader from 'react-content-loader';

export const JuryCardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={267}
    height={353}
    viewBox='0 0 267 353'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='346' y='204' rx='0' ry='0' width='40' height='5' />
    <rect x='32' y='0' rx='100' ry='100' width='203' height='203' />
    <rect x='0' y='231' rx='0' ry='0' width='267' height='52' />
    <rect x='0' y='299' rx='0' ry='0' width='267' height='54' />
  </ContentLoader>
);
