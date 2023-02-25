import { useMDXComponent } from 'next-contentlayer/hooks';
import { Box } from './box';
import { Card } from './card';

const components = {
  h1: (props: any) => <Box variant="title" as="h1" {...props} />,
  h2: (props: any) => <Box variant="subtitle" as="h2" {...props} />,
  h3: (props: any) => <Box variant="sectionTitle" as="h3" {...props} />,
  p: (props: any) => (
    <Box
      variant={props.className === 'callout' ? 'subtitle' : 'body'}
      as="p"
      {...props}
    />
  ),
  br: () => <br />,
  blockquote: (props: any) => (
    <Card
      as="blockquote"
      variant="callout"
      {...props}
      style={{ textAlign: 'left' }}
    />
  ),
  pre: (props: any) => (
    <pre
      style={{
        borderRadius: '1rem',
        padding: '2rem',
        backgroundColor: 'var(--background-surface-01)',
        border: '2px solid var(--border-accent)',
        boxShadow:
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      }}
      {...props}
    />
  ),
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
