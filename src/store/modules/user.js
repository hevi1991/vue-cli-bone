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
  async logout({ commit }) {
    const { data } = await logout();
    commit("SET_TOKEN", "");
    removeToken();
    return data;
  }
};

export default {
  state,
  mutations,
  actions
};
