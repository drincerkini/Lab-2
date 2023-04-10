<template>
  <HeaderComponent />

  <RouterView></RouterView>

  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  background-color: #456b90;
  margin-bottom: 200px;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
}

li {
  color: white;
  text-decoration: none;
}

.lista {
  color: white;
}

.username {
  color: white;
}
</style>
