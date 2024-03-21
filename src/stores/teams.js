import { defineStore } from 'pinia';
import { api } from '@/services';
import { isNonEmptyArr, mapSnakeToCamel } from '@/utils';
import { teams as initialState } from '@/stores/initialState';

/**
 * @description Is valid
 * @param teams
 * @returns {boolean}
 */
const isValid = (teams) => !isNonEmptyArr(teams);

/**
 * @description Init state
 * @param initialState
 * @returns {*}
 */
const initState = (initialState) => {
  if (!isValid(initialState)) {
    throw Error('Invalid initial teams store state');
  }

  return initialState.teams;
};

const getters = {
  getTeamsList: (state) => Object.values(state.$state).map((team) => team),
};

const actions = {
  setTeams(nextTeams) {
    useTeamsStore().$patch(nextTeams);
  },
  async getTeams() {
    try {
      const { status, statusText, data } = await api.teams.getTeams();

      if (status === 200) {
        this.setTeams(mapSnakeToCamel(data.football_teams));

        return {
          success: true,
          status,
          statusText,
        };
      }
    } catch (err) {
      return {
        success: false,
        status: err.response?.status,
        content: err.response?.statusText,
      };
    }
  },
};

export const useTeamsStore = defineStore('teams', {
  state: initState(initialState),
  getters,
  actions,
});

export default useTeamsStore;
