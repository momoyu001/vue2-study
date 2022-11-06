import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: [],
});

export default [vuexLocal.plugin];
