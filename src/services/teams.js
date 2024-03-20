import { http } from '@/services/http';

export const teams = {
  getTeams: async () => (
    // eslint-disable-next-line no-return-await
    await http.get('4e3c58e1-a76d-4e9b-9290-389440d87ebb')
  ),
};

export default teams;
