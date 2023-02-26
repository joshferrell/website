import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Container } from '~/components/container';
import { Mdx } from '~/components/mdx';

type PropTypes = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  return allBlogs.map(({ slug }) => ({ slug }));
};

export const generateMetadata = ({ params }: PropTypes): Metadata => {
  const blog = allBlogs.find((post) => post.slug === params.slug);
  if (!blog) return {};

  const url = `https://www.joshferrell.me/blog/${params.slug}`;

  const imageUrl = blog.image.includes('https://')
    ? blog.image
    : `https://www.joshferrell.me${blog.image.replace('.webp', '.png')}`;

  return {
    title: `Josh Ferrell | ${blog.title}`,
    alternates: {
      canonical: url,
    },
    description: blog.summary,
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      creator: '@norablindsided',
      site: '@norablindsided',
      description: blog.summary,
      images: {
        url: imageUrl,
        alt: blog.imageAlt,
      },
    },
    openGraph: {
      title: blog.title,
      type: 'article',
      description: blog.summary,
      url,
      locale: 'en-US',
      images: [
        {
          url: imageUrl,
          alt: blog.imageAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

const Page = async ({ params }: PropTypes) => {
  const slug = params?.slug || '';
  const blog = allBlogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <Container
      headerType="postHeader"
      backLink={{ href: '/blog', text: 'Return to blog' }}
      image={{ src: blog.image, alt: blog.imageAlt }}
      title={blog.title}
      subtitle={blog.category}
    >
      <Mdx code={blog.body.code} />
    </Container>
  );
};

export default Page;
