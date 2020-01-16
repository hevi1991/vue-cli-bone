import { getToken, removeToken, setToken } from "@/utils/auth";
import { login, logout } from "@/api/user";

const state = {
  token: getToken()
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
};

const actions = {
  async login({ commit }, loginForm) {
    await login(loginForm);
    commit("SET_TOKEN", 1);
    setToken(1);
  },
  async logout({ dispatch }) {
    const { data } = await logout();
    dispatch("clearToken");
    return data;
  },
  async clearToken({ commit }) {
    commit("SET_TOKEN", "");
    removeToken();
  }
};

export default {
  state,
  mutations,
  actions
};
