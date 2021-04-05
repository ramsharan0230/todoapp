<template>
  <div class="mb-4">
    <b-navbar toggleable="lg" type="feded" variant="warning">
      <b-navbar-brand href="#">
        <router-link :to="{ path: 'dashboard' }">Home</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item right href="#">
              <router-link :to="{ path: 'login' }">
                <b-button variant="warning" size="sm">Login</b-button>
              </router-link>
            <router-link :to="{ path: 'register' }">
                <b-button variant="warning" size="sm">Register</b-button>
              </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>