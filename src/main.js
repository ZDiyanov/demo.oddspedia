import { createApp } from 'vue';
import { pinia } from '@/stores';
import { config, head } from '@/plugins';

import App from './App';
import '@/assets/scss/base.scss';

const app = createApp(App);

app.use(pinia);
app.use(config);
app.use(head);

app.mount('#app');
