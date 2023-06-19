<template>

  <section class="navbar navbar-expand-lg p-2 mb-0" style="background-color: #060832;">
    <div class="container ">
      <h3 class="text-center text-white">VITI AKADEMIK 2022/2023 </h3>
      <router-link to="/application" class="nav-item nav-link btn btn-light px-4 py-2 me-2" >APLIKO TANI</router-link>
    </div>
  </section>
  
<!-- <nav class="navbar navbar-expand-lg p-5 mb-0 " style="background-color: #ffffff;">
      <div class="container-fluid text-center">
        <img src="../../public/img/ubt.png" data-holder-rendered="true" style="width: 95px; height: 100px;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto ">

            <li v-for="route in routes" v-bind:key="route.name" class="text-uppercase">
              <router-link v-bind:to="route.path" class="nav-item nav-link ">{{ route.name }}</router-link>
            </li>
          </ul>
          <div class="d-flex" role="search">
              <div v-if="this.user" id="main-nav" class="collapse navbar-collapse">
                  <div class="nav-item nav-link me-4">
                    Hello {{ $store.state.userModule.user.displayName }} !
                  </div>
                  
                  <a href="#" @click.prevent="handleLogOut" type="button" class="nav-item nav-link btn btn-danger p-2 text-white"> <i class="fa fa-sign-out"></i> Logout</a>
                </div>
                <div v-else id="main-nav" class="collapse navbar-collapse">
                  <router-link :to="{ name: 'login' }" class="nav-item nav-link btn btn-success px-4 py-2 me-2 text-white">Login</router-link>
                  <router-link to="/register" class="nav-item nav-link btn btn-success  px-4 py-2 text-white">Register</router-link>
                </div>
              </div>
          </div>
      </div>
</nav> -->


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="../../../public/img/dft.png" data-holder-rendered="true" style="width: 95px; height: 100px; margin-left: 250px;">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item linkHover"  v-for="route in routes" v-bind:key="route.name">
          <router-link v-bind:to="route.path" class="nav-link fs-4 m-3" >{{ route.name }}</router-link>
        </li>
        <li class="nav-item me-auto mb-2 mb-lg-0" v-if="this.user">
          <router-link to="/dashboard" class="nav-link fs-4 m-3" >DASHBOARD</router-link>
        </li>
      </ul>
      <div class="d-flex " style="margin-right: 90px;">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fs-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              E-Shërbimet
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://mail.google.com/mail/u/0/#inbox">
                <img src="../../../public/img/gmail.png" style="width: 30px; height: 20px;" />
                Mail
              </a></li>
              <li><a class="dropdown-item" href="https://localhost:7179/">
                <img src="../../../public/img/ubt.png" style="width: 25px; height: 25px;" />
                SMIS
              </a></li>
              <li><a class="dropdown-item" href="https://moodle.ubt-uni.net/login/index.php">
                <img src="../../../public/img/moodle.png" style="width: 25px; height: 25px;" />
                Moodle
              </a></li>
              <li><a class="dropdown-item" href="https://branch.ubt-uni.net/TV/ScheduleIndex.aspx">
                <img src="../../../public/img/ubt.png" style="width: 25px; height: 25px;" />
                Student (Grupet, Orari)
              </a></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
              <li><router-link class="dropdown-item" to="/register">Register</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="d-flex" role="search">
        <div v-if="this.user" id="main-nav" class="collapse navbar-collapse">
            <div class="nav-item nav-link me-4">
              Hello {{ $store.state.userModule.user.displayName }} !
            </div>
            
            <a href="#" @click.prevent="handleLogOut" type="button" class="nav-item nav-link btn btn-danger p-2 text-white"> <i class="fa fa-sign-out"></i> Logout</a>
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
        { path: "/", name: "UBT" },
        { path: "/about", name: "ABOUT" },
        { path: "/activities", name: "HULUMTIME & INOVACIONE" },
        { path: "/contact", name: "CONTACT" }
      ],
    }
  }
}
</script>

<style scoped>
.linkHover:hover{
  background-color: #eeeee4;
}
</style>