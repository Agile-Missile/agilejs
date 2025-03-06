import type { MDXComponents } from 'nextra/mdx-components';
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';

const docsComponents = getDocsMDXComponents();

export const useMDXComponents = (components?: Readonly<MDXComponents>) => ({
  ...docsComponents,
  ...components,
});
