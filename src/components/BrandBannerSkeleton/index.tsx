import React from 'react';
import ContentLoader from 'react-content-loader';

export const BrandBannerSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1300}
    height={411}
    viewBox='0 0 1300 411'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='1051' cy='188' r='188' />
    <rect x='0' y='21' rx='0' ry='0' width='767' height='165' />
    <rect x='0' y='207' rx='0' ry='0' width='767' height='91' />
    <rect x='0' y='340' rx='24' ry='24' width='276' height='50' />
  </ContentLoader>
);
