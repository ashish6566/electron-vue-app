<template>
  <v-container class="student-register" fluid>
    <v-layout row wrap>
      <form>
        <v-text-field
          label="Name"
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          @input="v.name.touch()"
          @blur="v.name.touch()"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :error-messages="emailErrors"
          @input="v.email.touch()"
          @blur="v.email.touch()"
          required
        ></v-text-field>
        <v-select
          label="Item"
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          @change="v.select.touch()"
          @blur="v.select.touch()"
          required
        ></v-select>
        <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          :error-messages="checkboxErrors"
          @change="v.checkbox.touch()"
          @blur="v.checkbox.touch()"
          required
        ></v-checkbox>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "StudentRegister",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: { required }
  },
  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.v.checkbox.dirty) return errors;
      !this.v.checkbox.required && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.v.select.dirty) return errors;
      !this.v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.v.name.dirty) return errors;
      !this.v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.v.email.dirty) return errors;
      !this.v.email.email && errors.push("Must be valid e-mail");
      !this.v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    submit() {
      this.v.touch();
    },
    clear() {
      this.v.reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>

<style scoped>
/* .student-register {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-auto-flow: row;
  padding: 10px;
}
.form {
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr, 1fr, 1fr, 1fr;
}
.form label {
  grid-column-start: 1;
  grid-column-end: 2;
}
input {
  grid-column-start: 2;
  grid-column-end: 5;
  outline: none;
  padding: 10px;
}
#datepicker,
#phone {
  grid-column-end: 3;
}
#lbl-gender,
#lbl-landline {
  grid-column-start: 3;
  grid-column-end: 4;
}
#lbl-gender {
  padding-left: 3rem;
}
#gender,
#landline {
  grid-column-start: 4;
}
.crud-buttons {
  padding: 10px;
}
button {
  width: 150px;
  margin: 5px;
  padding: 10px;
  font-size: 15px;
} */
</style>