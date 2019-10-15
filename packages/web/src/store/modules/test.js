export default {
    namespaced: true,
    state: {
        showAdminButton: false,
        count: 0
    },
    actions: {
        emitSetAdminButton({ commit }) {
            window.setTimeout(() => {
              commit('onSetAdminButton', true);
              commit('onCount');
            }, 100)
        }
    },
    mutations: {
        onSetAdminButton(state, data) {
            state.showAdminButton = data;
        },
        onCount(state) {
          state.count++;
        }
    }
};
