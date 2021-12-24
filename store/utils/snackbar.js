const defaultOptions = {
  color: "",
  message: "",
};

export const state = () => ({
  show: false,
  options: {},
});

export const getters = {
  getOptions: (state) => {
    return Object.assign(defaultOptions, state.options);
  },
};

export const mutations = {
  setShow(state, value) {
    state.show = value;
  },
  setOptions(state, value) {
    state.options = value;
  },
};

export const actions = {
  OPEN({ commit }, options) {
    commit("setShow", true);
    commit("setOptions", options);
  },
  CLOSE({ commit }) {
    commit("setShow", false);
    commit("setOptions", {});
  },
};
