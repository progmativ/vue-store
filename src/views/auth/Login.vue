<template>
  <div class="login">
    <h1>This is an login page</h1>
  </div>
  <div>
    <label for="email">Email</label>
    <input
      v-model.trim="form.email"
      type="text"
      placeholder="you@email.com"
      id="email"
    />

    <label for="password">Password</label>
    <input
      v-model.trim="form.password"
      type="password"
      placeholder="******"
      id="password"
    />

    <button type="submit" @click="onFormSubmit()">Zaloguj się</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LoginFormData } from "@/interfaces/auth";

export default defineComponent({
  data() {
    return {
      form: {
        email: "",
        password: "",
      } as LoginFormData,
    };
  },
  methods: {
    onFormSubmit() {
      this.$store
        .dispatch("login", { ...this.form })
        .then((res: unknown) => {
          console.log(res);
          this.$router.push("/");
        })
        .catch((error: unknown) => {
          alert(error);
        });
    },
  },
});
</script>
