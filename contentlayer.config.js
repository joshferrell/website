import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join(''),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
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

export default makeSource({
  contentDirPath: './src/posts',
  documentTypes: [Blog],
});
