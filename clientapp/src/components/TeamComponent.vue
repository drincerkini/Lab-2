<template>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div class="container py-5">
  <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>

  <div class="row text-center">
    <!-- Team item-->
    <div class="col-xl-3 col-sm-6 mb-5" v-for="team in this.teams" :key="team._id">
      <div class="bg-white rounded shadow-sm py-5 px-4"><img :src="`/uploads/${team.image.filename}`" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
        <h5 class="mb-0">{{team.name + ' ' + team.surname}}</h5><span class="small text-uppercase text-muted">{{team.position}}</span>
        <ul class="social mb-0 list-inline mt-3">
          <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
          <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
          <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
          <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
    <!-- End-->
  </div>

</div>

</template>


<script>
  import { mapState } from 'vuex';
  
  export default {

    computed : {
      ...mapState('teamModule', ['teams'])
    },
    created() {
      this.$store.dispatch('teamModule/getTeams');
    },
    methods: {
      async handleDelete(teamId){
        if (window.confirm("Do you really want to delete?")) {
          try {
            this.$store.dispatch('deleteTeam', teamId);
          }catch(err) {
            console.log("erro", err.message);
          }
        }
      }
    }
  }
    
</script>

