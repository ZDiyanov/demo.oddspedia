import axios from 'axios';
import { configs } from '@/configs';

export const http = axios.create({
  baseURL: configs.services.url,
});

export default http;
