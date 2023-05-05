<template>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
  <br>
  <br>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card-group mb-0">
          <div class="card p-4">
            <div class="card-body">
              <h1 class="mb-5 text-secondary">Login</h1>
              <p class="text-muted">Log In to your account</p>

              <form @submit.prevent="handleLoginUser">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="fa fa-user"></i></span>
                  <input type="text" class="form-control" placeholder="Email" id="email" v-model="email">
                  <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                  <input type="password" class="form-control" placeholder="Password" id="password" v-model="password">
                  <span v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                </div>
                <div class="row">
                  <div class="col-6">
                    <button type="submit" class="btn px-4 text-white" style="background-color: #008F8C">Login</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
          <div class="card text-white py-5 d-md-down-none" style="width:44%; background-color: #008F8C">
            <div class="card-body text-center">
              <div>
                <h2>Register </h2>
                <p>Register now and have the opportunity to feel the greatness!</p>
                <button type="button" class="btn btn-light mt-3 "> <router-link to="/register" style="text-decoration: none; color: black;"> Register
                    Now</router-link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
</template>
  
<script>
import useValidate from '@vuelidate/core';
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {

  data() {
    return {
      v$: useValidate(),
      user: null,
      email: '',
      password: '',
    }

  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(8), maxLength: maxLength(20) },
    }
  },
  methods: {
    async handleLoginUser() {
      try {
        this.v$.$validate()
        await this.$store.dispatch('userModule/login', {
          email: this.email,
          password: this.password,
          navigate: () => this.$router.push('/')
        })
      }
      catch (err) {
        return err.v$.$errors[0].$message;
      }
    }
  }
};
</script>


<style scoped>
body {
  margin-top: 20px;
  background: #eee;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}



.card-columns .card {
  margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
  .card-columns {
    column-count: 3;
    column-gap: 1.25rem;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.text-muted {
  color: #9faecb !important;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.input-group {
  position: relative;
  display: flex;
  width: 100%;
}
</style>