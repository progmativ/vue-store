import { VuexContext } from "./../../interfaces";
import { LoginFormData } from "@/interfaces/auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ActionContext } from "vuex";

interface State {
  user: User;
}

interface User {
  uid: string;
} // TODO

const state: State = {
  user: {
    uid: "",
  },
};
const mutations = {
  setUser(state: State, user: User): void {
    state.user = user;
  },
};
const actions = {
  async login(
    context: ActionContext<User, unknown>,
    form: LoginFormData
  ): Promise<void> {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password);
    context.dispatch("fetchUser", user);
  },

  async fetchUser(context: VuexContext, user: User): Promise<void> {
    const firebaseUser = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid);
    context.commit("setUser", firebaseUser);
  },

  async logout(): Promise<void> {
    await firebase.auth().signOut();
  },
};
const getters = {
  user: (state: State): User => state.user,
};

export const auth = {
  state,
  mutations,
  actions,
  getters,
};

export default auth;
