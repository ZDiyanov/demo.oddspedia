import { createHead } from '@unhead/vue';

export const plugin = {
  install: (app) => {
    app.use(createHead());
  },
};

export default plugin;
