import { LoginFormData } from "@/interfaces/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { Commit } from "vuex";

const state = {
  user: {},
};
const mutations = {};
const actions = {
  async login(context: { commit: Commit }, form: LoginFormData): Promise<void> {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password);
    console.log(user);
    console.log(context);
  },
};
const getters = {};

export const auth = {
  state,
  mutations,
  actions,
  getters,
};

export default auth;
