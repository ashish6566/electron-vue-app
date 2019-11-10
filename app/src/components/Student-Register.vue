<template>
  <v-container class="student-register" fluid>
    <h1>New Student Registration</h1>
    <form>
      <v-layout row wrap>
        <v-flex md6 lg6 pa-2>
          <v-text-field
            label="First Name"
            class="txtBox"
            v-model="firstname"
            :error-messages="firstnameErrors"
            :counter="10"
            @input="v.firstname.touch()"
            @blur="v.firstname.touch()"
            required
            outlined
          ></v-text-field>
        </v-flex>

        <v-flex md6 lg6 pa-2>
          <v-text-field
            label="Last Name"
            class="txtBox"
            v-model="surname"
            :error-messages="surnameErrors"
            :counter="10"
            @input="v.surname.touch()"
            @blur="v.surname.touch()"
            required
            outlined
          ></v-text-field>
        </v-flex>

        <v-flex md5 lg4 pa-2>
          <v-select
            label="Gender"
            class="txtBox"
            v-model="gender"
            :items="items"
            :error-messages="genderErrors"
            @change="v.gender.touch()"
            @blur="v.gender.touch()"
            required
            outlined
          ></v-select>
        </v-flex>

        <v-flex md5 lg4 pa-3>
          <Datepicker
            id="stdnt-birthdate"
            v-model="birthdate"
            placeholder="Date of Birth"
            input-class="txtBox"
            wrapper-class="datepicker"
            @input="v.birthdate.touch()"
            clear-button
            required
          ></Datepicker>
          <span id="date-picker-error">{{ datePickerError }}</span>
        </v-flex>

        <v-flex md6 lg6 pa-3>
          <v-text-field
            label="Guardian Name"
            class="txtBox"
            v-model="guardianname"
            :error-messages="guardiannameErrors"
            :counter="10"
            @input="v.guardianname.touch()"
            @blur="v.guardianname.touch()"
            required
            outlined
          ></v-text-field>
        </v-flex>

        <v-flex md6 lg6 pa-3>
          <v-text-field
            label="Address"
            class="txtBox"
            v-model="address"
            :error-messages="addressErrors"
            :counter="10"
            @input="v.address.touch()"
            @blur="v.address.touch()"
            required
            outlined
          ></v-text-field>
        </v-flex>

        <v-flex md6 lg6 pa-3>
          <v-text-field
            label="Contact"
            class="txtBox"
            v-model="contact"
            :error-messages="contactErrors"
            :counter="10"
            @input="$v.contact.touch()"
            @blur="$v.contact.touch()"
            required
            outlined
          ></v-text-field>
        </v-flex>

        <v-flex md6 lg6 pa-3>
          <v-text-field
            label="E-mail"
            class="txtBox"
            v-model="email"
            :error-messages="emailErrors"
            @input="$v.email.touch()"
            @blur="$v.email.touch()"
            required
            outlined
          ></v-text-field>
        </v-flex>

        <v-flex md8 lg6>
          <v-btn @click="register" tile>register</v-btn>
          <v-btn @click="clear" tile>clear</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
import Datepicker from "vuejs-datepicker";
// import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "StudentRegister",
  components: {
    Datepicker
  },
  // mixins: [validationMixin],
  validations: {
    firstname: { required, maxLength: maxLength(40) },
    surname: { required, maxLength: maxLength(40) },
    birthdate: { required },
    guardianname: { required },
    contact: { required, maxLength: maxLength(15) },
    address: { required },
    email: { email },
    gender: { required }
  },
  data: () => ({
    firstname: "",
    surname: "",
    guardianname: "",
    gender: null,
    birthdate: "",
    address: "",
    contact: "",
    email: "",
    items: ["Male", "Female", "Other"],
    datePickerError: ""
  }),
  computed: {
    firstnameErrors() {
      const errors = [];
      if (!this.$v.firstname.dirty) return errors;
      !this.$v.firstname.maxLength &&
        errors.push("Name must be at most 40 characters long");
      !this.$v.firstname.required && errors.push("First Name is required.");
      return errors;
    },
    surnameErrors() {
      const errors = [];
      if (!this.$v.surname.dirty) return errors;
      !this.$v.surname.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.surname.required && errors.push("Last Name is required.");
      return errors;
    },
    genderErrors() {
      const errors = [];
      if (!this.$v.gender.dirty) return errors;
      !this.$v.gender.required && errors.push("Gender is required");
      return errors;
    },

    guardiannameErrors() {
      const errors = [];
      if (!this.$v.guardianname.dirty) return errors;
      !this.$v.guardianname.required &&
        errors.push("Guardian Name is required.");
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.address.dirty) return errors;
      !this.$v.address.required && errors.push("Address is required.");
      return errors;
    },
    contactErrors() {
      const errors = [];
      if (!this.$v.contact.dirty) return errors;
      !this.$v.contact.maxLength &&
        errors.push("Name must be at most 15 characters long");
      !this.$v.contact.required && errors.push("Contact is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      return errors;
    }
  },
  methods: {
    register() {
      this.v.touch();
    },
    clear() {
      this.$v.reset();
      this.firstname = "";
      this.surname = "";
      this.gender = null;
      this.birthdate = "";
      this.guardianname = "";
      this.address = "";
      this.contact = "";
      this.email = "";
    },
    datepickerErrors() {
      const errors = [];
      if (!this.$v.birthdate.dirty) return errors;
      !this.$v.birthdate.required && errors.push("Date of Birth is required");
      this.datepickerError = errors;
    }
  }
};
</script>

<style scoped>
</style>