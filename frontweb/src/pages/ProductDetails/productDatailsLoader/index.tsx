import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductDetailLoader = () => (
  <ContentLoader viewBox="0 0 320 280" height={280} width={320}>
    <rect x="0" y="3" rx="10" ry="10" width="280" height="180" />
  </ContentLoader>
);

ProductDetailLoader.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
};

export default ProductDetailLoader;
