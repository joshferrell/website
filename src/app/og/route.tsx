export const runtime = 'experimental-edge';
import { type NextApiRequest } from 'next';
import { ImageResponse } from 'next/server';
import OpenGraphImage from '~/components/open-graph';

const font = fetch(
  new URL('https://fonts.googleapis.com/css?family=Manrope', import.meta.url)
).then((res) => res.arrayBuffer());

export const GET = async (request: NextApiRequest) => {
  const fontData = await font;

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
        ],
      }
    );
  } catch (err) {
    return new Response('failed to generate image', { status: 500 });
  }
};
