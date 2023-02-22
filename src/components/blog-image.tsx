type PropTypes = {
  src: string;
  alt: string;
};

export const BlogImage = ({ src, alt }: PropTypes) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={alt}
    width={647}
    height={364}
    style={{ borderRadius: '1rem', width: '100%', height: 'auto' }}
  />
);
