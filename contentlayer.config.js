import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrism from '@mapbox/rehype-prism';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join(''),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Is the article ready to be listed',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The type of category',
      options: [
        'Web Design',
        'Web Development',
        'React',
        'Accessibility',
        'User Experience',
      ],
      required: true,
    },
    image: {
      type: 'string',
      description: 'Image of post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A brief summary of the post',
      required: true,
    },
    imageAlt: {
      type: 'string',
      description: 'Alt text of image',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields,
}));

export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: 'work/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    link: {
      type: 'string',
      description: 'URL of the project source',
      required: false,
    },
    published: {
      type: 'boolean',
      description: 'Is the article ready to be listed',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The type of category',
      options: [
        'CLI Tools',
        'Design System',
        'React Components',
        'Open Source',
      ],
      required: true,
    },
    image: {
      type: 'string',
      description: 'Image of post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A brief summary of the post',
      required: true,
    },
    imageAlt: {
      type: 'string',
      description: 'Alt text of image',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/posts',
  documentTypes: [Blog, Work],
  mdx: {
    rehypePlugins: [rehypePrism],
  },
});
