import { Box } from './box';

type PropTypes = {
  title: string;
  subtitle: string;
};

export const NumberCallout = ({ title, subtitle }: PropTypes) => (
  <div style={{ textAlign: 'center' }}>
    <Box
      variant="title"
      style={{
        fontSize: '4.5rem',
        lineHeight: '4.5rem',
        marginBottom: '.8rem',
        letterSpacing: '.05rem',
      }}
    >
      {title}
    </Box>
    <Box variant="small" color="secondary">
      {subtitle}
    </Box>
  </div>
);
