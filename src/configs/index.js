const {
  MODE,
  VITE_API_URL,
  VITE_API_REQUEST_TIMEOUT_MS,
  VITE_QUERY_LENGTH
} = import.meta.env;

const env = MODE;

export const isDev = env === 'development';
export const isStage = env === 'staging';
export const isProd = env === 'production';

export const configs = {
  env,
  services: {
    url: VITE_API_URL,
    requestTimeout: Number(VITE_API_REQUEST_TIMEOUT_MS) || 0,
  },
  minQueryLength: Number(VITE_QUERY_LENGTH) || 1,
};

export default configs;
