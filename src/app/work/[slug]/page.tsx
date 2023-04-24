import { allWorks } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Container } from '~/components/container';
import { Mdx } from '~/components/mdx';
import { ButtonLink } from '~/components/button-link';

type PropTypes = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  return allWorks.map(({ slug }) => ({ slug }));
};

export const generateMetadata = ({ params }: PropTypes): Metadata => {
  const work = allWorks.find((post) => post.slug === params.slug);
  if (!work) return {};

  const url = `https://www.joshferrell.me/work/${params.slug}`;

  return {
    title: `Josh Ferrell | ${work.title}`,
    alternates: {
      canonical: url,
    },
    description: work.summary,
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      creator: '@norablindsided',
      site: '@norablindsided',
      description: work.summary,
      images: {
        url: `https://joshferrell.me/og?title=${encodeURIComponent(
          work.title
        )}&subtitle=${encodeURIComponent(work.category)}`,
        alt: '',
      },
    },
    openGraph: {
      title: work.title,
      type: 'article',
      description: work.summary,
      url,
      locale: 'en-US',
      images: [
        {
          url: `https://joshferrell.me/og?title=${encodeURIComponent(
            work.title
          )}&subtitle=${encodeURIComponent(work.category)}`,
          alt: '',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

const Page = async ({ params }: PropTypes) => {
  const slug = params?.slug || '';
  const work = allWorks.find((post) => post.slug === slug);

  if (!work) {
    notFound();
  }

  const subtitle = work.company
    ? `${work.category} at ${work.company}`
    : work.category;

  return (
    <Container
      image={{ src: work.image, alt: work.imageAlt, blurUrl: work.blurUrl }}
      title={work.title}
      headerType="postHeader"
      backLink={{ href: '/work', text: 'Return to portfolio' }}
      subtitle={subtitle}
    >
      <Mdx code={work.body.code} />
      {work.link && (
        <ButtonLink isExternal href={work.link}>
          View project
        </ButtonLink>
      )}
    </Container>
  );
};

export default Page;
