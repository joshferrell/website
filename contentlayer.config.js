import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeRaw from 'rehype-raw';
import remarkShikiTwoslash from 'remark-shiki-twoslash';

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
    socialImage: {
      type: 'string',
      description: 'Social image of post',
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
    showOnBlog: {
      type: 'boolean',
      description: 'Also display on blog',
    },
    company: {
      type: 'string',
      description: 'The company work was done for',
      required: false,
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
    socialImage: {
      type: 'string',
      description: 'Social image of post',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The type of category',
      options: [
        'CLI Tools',
        'Design System',
        'React Components',
        'Architecture',
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

export const Testamonial = defineDocumentType(() => ({
  name: 'Testamonial',
  filePathPattern: 'testamonial/*.md',
  contentType: 'markdown',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the person',
      required: true,
    },
    company: {
      type: 'string',
      description: 'The company the person works for',
      required: true,
    },
    isHidden: {
      type: 'boolean',
      description: 'Hide the testamonial from displaying',
      required: false,
      default: false,
    },
    title: {
      type: 'string',
      description: 'The job title of the person',
      required: true,
    },
    profilePhotoUrl: {
      type: 'string',
      description: 'Profile photo of person',
      required: true,
    },
  },
}));

export const Award = defineDocumentType(() => ({
  name: 'Award',
  filePathPattern: 'award/*.md',
  contentType: 'markdown',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the award',
      required: true,
    },
    isFeatured: {
      type: 'boolean',
      description: 'The award is featured prominently',
      default: false,
      required: false,
    },
    isHidden: {
      type: 'boolean',
      description: 'Hide the award from displaying',
      required: false,
      default: false,
    },
    company: {
      type: 'string',
      description: 'The company that gave the award',
    },
    year: {
      type: 'number',
      description: 'The year the award was issued',
      required: true,
    },
    companyImageUrl: {
      type: 'string',
      description: 'Profile photo of person',
      required: true,
    },
  },
}));

export default makeSource(async () => {
  // const highlighter = await shiki.getHighlighter({
  //   theme: 'dark-plus',
  //   langs: ['mdx', 'tsx', 'ts', 'js', 'css', 'html', 'jsx'],
  // });

  return {
    contentDirPath: './src/posts',
    documentTypes: [Blog, Work, Award, Testamonial],
    mdx: {
      remarkPlugins: [[remarkShikiTwoslash.default, { theme: 'dark-plus' }]],
      rehypePlugins: [[rehypeRaw, { allowDangerousHtml: true }]],
    },
  };
});
