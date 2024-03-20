import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

export const pinia = createPinia();

pinia.use(createPersistedState({
  storage: localStorage,
  key: (store) => `oddspedia-persisted__${store}`,
}));

export default pinia;
