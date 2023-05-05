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
              <h1 class="mb-5 text-secondary">Register</h1>
              <p class="text-muted">Register now!</p>

              <form @submit.prevent="handleRegisterUser">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="fa fa-user"></i></span>
                  <input type="text" class="form-control" placeholder="Name" id="name" v-model="name">
                  <span v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="fa fa-user"></i></span>
                  <input type="text" class="form-control" placeholder="Last Name" id="surname" v-model="surname">
                  <span v-if="v$.surname.$error">{{ v$.surname.$errors[0].$message }}</span>
                </div>
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
                    <button  type="submit" class="btn px-4 text-white" style="background-color: #008F8C" >Register</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
          <div class="card text-white py-5 d-md-down-none" style="width:44%; background-color: #008F8C" >
            <div class="card-body text-center">
              <div>
                <h2>Login </h2>
                <p>Click to Log-in and explore through our pages!</p>
                <button type="button" class="btn btn-light mt-3"> <router-link to="/login" style="text-decoration: none; color: black;"> Login
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
      name: '',
      surname: '',
      email: '',
      password: '',
    }
  },
  validations() {
    return {
      name: { required, minLength: minLength(3), maxLength: maxLength(15) },
      surname: { required, minLength: minLength(4), maxLength: maxLength(15) },
      email: { required, email },
      password: { required, minLength: minLength(8), maxLength: maxLength(20) },
    }
  },
  methods: {
    async handleRegisterUser() {
      try {
        this.v$.$validate()
        if (!this.v$.$error) {
          await this.$store.dispatch('userModule/register', {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            navigate: () => this.$router.push('/login'),
          });
        } 
      }
      catch (err) {
        return err.v$.$errors[0].$message
      }
    }
  }
}


</script>