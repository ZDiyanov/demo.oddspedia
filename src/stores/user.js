import { defineStore } from 'pinia';
import { isObj, isNull, isNonEmptyStr, isNonEmptyArr } from '@/utils';
import { user as initialState } from '@/stores/initialState';
import { user as persist } from '@/stores/persistedState';

/**
 * @description Is valid
 * @param user
 * @returns {boolean}
 */
const isValid = (user) => isObj(user)
  && isNull(user.id)
  && !isNonEmptyStr(user.firstname)
  && !isNonEmptyStr(user.lastname)
  && !isNonEmptyArr(user.followed);

/**
 * @description Init state
 * @param initialState
 * @returns {*}
 */
const initState = (initialState) => {
  if (!isValid(initialState)) {
    throw Error('Invalid initial user store state');
  }

  const { id, firstname, lastname, followed } = initialState;
  return () => ({
    id,
    firstname,
    lastname,
    followed,
  });
};

const getters = {
  getId: ({ id }) => id,
  getFirstname: ({ firstname }) => firstname,
  getLastname: ({ lastname }) => lastname,
  getFollowed: ({ followed }) => followed,
};

const actions = {
  setUser() {
    const nextUser = {
      id: 1,
      firstname: 'Richy',
      lastname: 'Rich',
      followed: [],
    };

    this.id = nextUser.id;
    this.firstname = nextUser.firstname;
    this.lastname = nextUser.lastname;
    this.followed = nextUser.followed;
  },
  toggleTeamFollow(nextId) {
    const nextFollowed = this.followed.includes(nextId)
      ? this.followed.filter((id) => id !== nextId)
      : [...this.followed, nextId];

    this.followed = nextFollowed;
  }
};

export const useUserStore = defineStore('user', {
  state: initState(initialState),
  getters,
  actions,
  persist,
});

export default useUserStore;
