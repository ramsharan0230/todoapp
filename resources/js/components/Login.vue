<template>
  <div>
    <b-card-group deck>
      <b-card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="User Login System"
      >
        <b-form @submit.stop.prevent>
        <label for="text-email">Email</label>
          <b-form-input
            type="text"
            id="text-email"
            placeholder="Enter Email..."
            aria-describedby="email-help-block"
          ></b-form-input>
          <b-form-text id="email-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>


          <label for="text-password">Password</label>
          <b-form-input
            type="password"
            id="text-password"
            placeholder="Enter Password..."
            aria-describedby="password-help-block"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>

          <b-button variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>