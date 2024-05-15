import type { Schema, Attribute } from '@strapi/strapi';

export interface BbububuunProducts extends Schema.Component {
  collectionName: 'components_bbububuun_products';
  info: {
    displayName: 'products';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bbububuun.products': BbububuunProducts;
    }
  }
}
