<template>
<nav class="navbar navbar-expand-lg p-3 mb-0" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <img src="../../public/img/logo.png" data-holder-rendered="true" style="width: 120px; height: 105px;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="route in routes" v-bind:key="route.name">
              <router-link v-bind:to="route.path" class="nav-item nav-link">{{ route.name }}</router-link>
            </li>
          </ul>
          <div class="d-flex" role="search">
              <div v-if="this.user" id="main-nav" class="collapse navbar-collapse">
                  <div class="nav-item nav-link">
                    Hello {{ $store.state.userModule.user.displayName }}!
                  </div>
                  
                  <a href="#" @click.prevent="handleLogOut" type="button" class="nav-item nav-link">Logout</a>
                </div>
                <div v-else id="main-nav" class="collapse navbar-collapse">
                  <router-link :to="{ name: 'login' }" class="nav-item nav-link ">Login</router-link>
                  <router-link to="/register" class="nav-item nav-link">Register</router-link>
                </div>
              </div>
          </div>
      </div>
</nav>


</template>


<script>
import { mapGetters, mapState } from 'vuex';
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';
export default {
  methods: {
    async handleLogOut() {
      const auth = getAuth()
      await signOut(auth);
      await this.$router.push('/login');
      location.reload();
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit('userModule/setUser', user);
      }
    })
  },
  computed: {
    ...mapState('userModule', ['user']),
    ...mapGetters('userModule', ['username']),
    ...mapGetters('userModule', ['claims'])

  },
  data() {
    return {
      routes: [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/products", name: "Products" },
        { path: "/services", name: "Services" },
        { path: "/contact", name: "Contact" },
        { path: "/admin", name: "Dashboard" }
      ],
    }
  }
}
</script>