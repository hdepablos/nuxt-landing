<template>
  <div class="form pt-6">
    <div class="summary text-red" v-if="$v.form.$error">Form has errors</div>
    <form @submit.prevent="submit" novalidate>
      <div class="grid-x grid-padding-x my-6 text-left">
        <div class="cell small-6">
          <name-component
            v-model="form.name"
            :v="$v.form.name"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />
        </div>
        <div class="cell small-6">
          <email-component v-model="form.email" :v="$v.form.email" />
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { isNameJoe, notGmail, isEmailAvailable } from "@/validators";
import NameComponent from "./NameComponent.vue";
import EmailComponent from "./EmailComponent.vue";

export default {
  name: "FormComponent",

  components: { NameComponent, EmailComponent },

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
      name: { required, isJoe: isNameJoe },
      email: { required, email, notGmail, isEmailAvailable }
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
