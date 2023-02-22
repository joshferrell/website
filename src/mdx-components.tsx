'use client'; // This is required!

import { Box } from '~/components/box';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

type PropTypes = {
  children: React.ReactNode;
};

const H1 = ({ children }: PropTypes) => (
  <Box as="h1" variant="title">
    {children}
  </Box>
);

const H2 = ({ children }: PropTypes) => (
  <Box as="h2" variant="subtitle">
    {children}
  </Box>
);

export const useMDXComponents = (components: any) => ({
  h1: H1,
  h2: H2,
  ...components,
});
