<template>
  <br />
  <br />
  <br />


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

<section id="about-section" class="pt-5 pb-5">
  <div class="container wrapabout">
    <div class="row mb-4">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light">Client Reviews</h2>
          <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>

    <div class="row ">
      <!-- Reviews item-->
      <div class="media material_media"  v-for="info in this.reviews" :key="info._id">
        <div class="media-left">
          <a href="#">
            <img class="media-object material_media_object" data-src="holder.js/64x64" alt="64x64" src="../../public/img/user.jpg" data-holder-rendered="true" style="width: 64px; height: 64px;">
          </a>
        </div>
        <div class="media-body material_media_body">
          <h4 class="media-heading material_media_heading">{{ info.client }}</h4>
          <p>{{ info.description }}</p>
          <p>{{ info.createdAt }}</p>

        </div>
      </div> 
      <!-- End-->

    </div>
  </div>
</section>
</template>
    
    
    
<script>
  import { mapState } from 'vuex';
  
  export default {

    computed : {
      ...mapState('reviewsModule', ['reviews'])
    },
    created() {
      this.$store.dispatch('reviewsModule/getReviews');
    },
    methods: {
      async handleDelete(teamId){
        if (window.confirm("Do you really want to delete?")) {
          try {
            this.$store.dispatch('deleteNews', teamId);
          }catch(err) {
            console.log("erro", err.message);
          }
        }
      }
    }
  }
        
</script>
    
    
<style scoped >
    
/***********************Media alignment***********************/
.material_media .material_media_object {
  border-radius: 50%;
  box-shadow: 0 0 1px 0px #ccc;
  margin: 0 10px;
  -webkit-transition: box-shadow 0.3s ease-in 0s;
  transition: box-shadow 0.3s ease-in 0s;
}
.material_media .material_media_object:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.42);
}
.material_media .material_media_heading {
  font-weight: 400;
}
.material_media .material_media_body {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}
</style>