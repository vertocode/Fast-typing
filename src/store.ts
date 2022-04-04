import { createStore } from 'vuex'

export const store = createStore({
    state: {
        stopwatchIsActive: false
    },
    mutations: {
      changeStateOfStopwatchIsActive(state: any) {
          state.stopwatchIsActive = !state.stopwatchIsActive
      }
    }
});