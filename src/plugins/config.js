import configs from '@/configs';

export const plugin = {
  install: (app) => {
    app.provide('$config', configs);
    app.config.globalProperties.$filters = {
      // DEV Note: register as a global filter, if we were using Vue 2.x we could use the filters with the pipe simbol
      highlight(val, query) {
        const reg = new RegExp('(' + query + ')', 'gi');
        return val.replace(reg, '<span class=\'substr--highlighted\'>$1</span>');
      }
    };
  },
};

export default plugin;
