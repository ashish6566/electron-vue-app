<template>
  <div class="student-register">
    <div class="form">
      <label for="studentName" id="lbl-studentname">Student Name:</label>
      <input
        type="text"
        name="student_name"
        id="student_name"
        placeholder="Please provide full name"
      />

      <label for="datepicker" id="lbl-dateofbirth">Date of Birth:</label>
      <input type="date" min="2000-01-01" max="2100-12-30" name="datepicker" id="datepicker" />

      <label for="gender" id="lbl-gender">Gender:</label>
      <input type="text" name="gender" id="gender" list="list-gender" placeholder="Choose" />
      <datalist id="list-gender">
        <option value="Male"></option>
        <option value="Female"></option>
        <option value="Others"></option>
      </datalist>

      <label for="guardian-name" id="lbl-guardian-name">Guardian Name:</label>
      <input
        type="text"
        name="guardian-name"
        id="guardian-name"
        placeholder="Please provide full name"
      />

      <label for="address" id="lbl-address">Address:</label>
      <input
        type="text"
        name="address"
        id="adress"
        placeholder="minimum street/community, village/town/city, district"
      />

      <label for="phone" id="lbl-phone">Phone No:</label>
      <input type="text" name="phone" id="phone" placeholder="Mobile Phone no." />

      <label for="landline" id="lbl-landline">LandLine:</label>
      <input type="text" name="landline" id="landline" placeholder="(optional)" />

      <label for="email" id="lbl-email">Email:</label>
      <input type="email" name="email" id="email" placeholder="abc@example.com (optional)" />
    </div>
    <div class="crud-buttons">
      <button type="submit">Register</button>
      <button type="submit">Modify</button>
      <button type="submit">Delete</button>
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentRegister"
  //   data() {
  //     return {
  //       key: value
  //     };
  //   },
  //   methods: {
  //     name() {}
  //   }
};
</script>

<style scoped>
.student-register {
  display: grid;
  grid-template-columns: 1fr 1fr 250px;
  grid-auto-flow: row;
  padding: 10px;
}
.form {
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(8, 1fr);
}
.form label {
  grid-column-start: 1;
  grid-column-end: 3;
}
input {
  grid-column-start: 3;
  grid-column-end: 8;
  outline: none;
  padding: 10px;
}
#datepicker {
  grid-column-end: 5;
}
#lbl-gender {
  grid-column-start: 5;
  grid-column-end: 6;
  padding-left: 3rem;
}
#gender {
  grid-column-start: 6;
}
#phone {
  grid-column-end: 5;
}
#lbl-landline {
  grid-column-start: 5;
  grid-column-end: 6;
}
#landline {
  grid-column-start: 6;
}
.crud-buttons {
  padding: 10px;
}
button {
  width: 150px;
  margin: 0;
  padding: 10px;
  font-size: 15px;
  margin: 5px;
}
</style>