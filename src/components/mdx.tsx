import { useMDXComponent } from 'next-contentlayer/hooks';
import { Box } from './box';

const components = {
  h1: (props: any) => <Box variant="title" as="h1" {...props} />,
  h2: (props: any) => <Box variant="subtitle" as="h2" {...props} />,
  h3: (props: any) => <Box variant="sectionTitle" as="h3" {...props} />,
  p: (props: any) => <Box variant="body" as="p" {...props} />,
  img: (props: any) => (
    // MDX should always contain image and alt text
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      width={647}
      height={364}
      style={{
        borderRadius: '1rem',
        width: '100%',
        height: '400px',
        display: 'block',
        margin: '0 auto',
        objectFit: 'cover',
      }}
      {...props}
    />
  ),
};

type PropTypes = {
  code: string;
};

export const Mdx = ({ code }: PropTypes) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
