<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-6 b-r">
        <h3 class="m-t-none m-b">Sign in</h3>
        <p>Sign in today for more expirience.</p>
        <div class="summary text-red" v-if="$v.form.$error">
          Form has errors
        </div>

        <div>
          <ul>
            <li>
              <a href="#" @click.prevent="$v.form.$touch()">Touch validar</a>
            </li>
            <li>
              <a href="#" @click.prevent="$v.form.$reset()">Reset</a>
            </li>
          </ul>
        </div>

        <form role="form" @submit.prevent="submit">
          <div class="form-group" :class="{ 'has-error': $v.form.name.$error }">
            <!-- <label class="control-label">Email</label> -->
            <form-group
              :validator="$v.form.name"
              label="Nombre"
              class="control-label"
            >
              <input
                type="email"
                placeholder="Enter email"
                class="form-control"
                v-model="form.name"
                :v="$v.form.name"
                @input="$v.form.name.$touch()"
                @blur="$v.form.name.$touch()"
              />
            </form-group>

            <!-- <span
              class="form-text m-b-none text-danger"
              v-if="$v.form.name.$error"
            >{{ $v.form.name }}</span> -->
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              class="form-control"
            />
          </div>
          <div>
            <button
              class="btn btn-sm btn-primary float-right m-t-n-xs"
              type="submit"
            >
              <strong>Procesar</strong>
            </button>
            <label>
              <input type="checkbox" class="i-checks" /> Remember me
            </label>
          </div>
        </form>
      </div>
      <div class="col-sm-6">
        <h4>Not a member?</h4>
        <p>You can create an account:</p>
        <p class="text-center">
          <a href>
            <fa-icon
              :icon="['fas', 'users']"
              size="6x"
              :style="{ color: 'bue' }"
            />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

import { isNameJoe } from "@/validators";

export default {
  name: "FormComponent",

  // components: { NameComponent, EmailComponent },

  data() {
    return {
      form: {
        name: "",
        email: ""
      }
    };
  },

  validations: {
    form: {
      name: { required, isJoe: isNameJoe }
      // name: { required, isJoe: isNameJoe },
      // email: { required, email, notGmail, isEmailAvailable }
      // email: { required, email }
    }
  },

  methods: {
    submit() {
      console.log("submitted");
      this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return;
      // to form submit after this
      alert("Form submitted");
    }
  }
};
</script>

<style></style>
