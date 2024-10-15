import { metaSchema } from 'nextra/schemas';
import { z } from 'zod';

export default {
  index: {
    title: 'Introduction',
    type: 'page',
    display: 'hidden',
    theme: { layout: 'raw' },
  },
  docs: {
    title: '文档',
    type: 'page',
  },
} satisfies Record<string, z.infer<typeof metaSchema>>;
