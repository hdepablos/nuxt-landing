<template>
  <form @submit.prevent="test">
    <input
      type="email"
      name="email"
      v-model.trim="$v.email.$model"
      @input="$v.name.$touch()"
    />
    <p v-if="!$v.email.required">The email field is required!</p>
    <p v-if="!$v.email.email">The input must be a proper email!</p>
    <input type="password" name="password" v-model.trim="$v.password.$model" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "VueliForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    test() {
      this.$v.$touch();
    }
  }
};
</script>
