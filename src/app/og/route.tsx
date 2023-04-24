export const runtime = 'experimental-edge';
import { ImageResponse, type NextRequest } from 'next/server';
import OpenGraphImage from '~/components/open-graph';

const font = fetch(new URL('https://joshferrell.me/Manrope-Regular.woff')).then(
  (res) => res.arrayBuffer()
);

const boldFont = fetch(
  new URL('https://joshferrell.me/Manrope-Bold.woff')
).then((res) => res.arrayBuffer());

export const GET = async (request: NextRequest) => {
  const fontData = await font;
  const boldData = await boldFont;

  try {
    const { searchParams } = new URL(request.url!);
    const title = searchParams.get('title');
    const subtitle = searchParams.get('subtitle');

    if (!title || !subtitle) {
      throw new Error('invalid request');
    }

    return new ImageResponse(
      <OpenGraphImage title={title} subtitle={subtitle} />,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Manrope',
            data: fontData,
            style: 'normal',
          },
          {
            name: 'Manrope-bold',
            data: boldData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (err) {
    return new Response('failed to generate image', { status: 500 });
  }
};
