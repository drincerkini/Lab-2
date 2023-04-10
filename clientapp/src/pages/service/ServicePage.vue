<template>

<div class="bg-white">

  <div class="container">
    <div class="d-flex justify-content-between align-items-center py-4">
      <div>
        <a href="#" class="d-inline-block text-dark">
          <span class="text-muted">Number of services  </span>
          <strong>{{ this.numberOfServices }}</strong>
        </a>
      </div>
      <div>
        <a href="#" class="btn btn-success btn-sm">
          <router-link to="/create-service" class="nav-item nav-link">ADD SERVICE</router-link>
        </a>
        <a href="#" class="btn btn-default icon-btn md-btn-flat btn-sm ml-1">
          <i class="ion ion-md-mail"></i>
        </a>
      </div>
    </div>
  </div>
  <hr class="m-0">

</div>



<h1 class="page-header text-center">Our Services</h1>
<section id="about-section" class="pt-5 pb-5">
  <div class="container wrapabout">
		<div class="row">
			<div class="col-sm-6 col-md-4" v-for="service in this.services" :key="service._id">
				<div class="thumbnail material_thumbnail">
					<img :src="`/uploads/${service.image.filename}`" alt="Thumbnail label" />
					<div class="caption material_caption ">
						<h3 class="text-center">{{ service.title }}</h3>
						<p>{{ service.description }}</p>
						<p><a href="#" class="btn btn-default material_btn" role="button">$ {{ service.price }}</a></p>
					</div>
				</div>
        <br />
        <br />
        <br />
			</div>
		</div>
  </div>
</section>

</template>
    
<script>
import { mapState, mapGetters } from 'vuex';

export default {

  computed : {
    ...mapState('serviceModule', ['services']),
    ...mapGetters('serviceModule',['numberOfServices'])
  },
  created() {
    this.$store.dispatch('serviceModule/getServices');
  },
  methods: {
    async handleDelete(serviceId){
      if (window.confirm("Do you really want to delete?")) {
        try {
          this.$store.dispatch('deleteService', serviceId);
        }catch(err) {
          console.log("erro", err.message);
        }
      }
    }
  }
}

</script>
    
    
<style scoped>

/***********************Custom content***********************/
.material_thumbnail {
  border-radius: 0;
  padding: 0;
  box-shadow: 0 6px 13px rgba(0, 0, 0, 0.12);
  -webkit-transition: box-shadow 0.3s ease-in 0s;
  transition: box-shadow 0.3s ease-in 0s;
}
.material_thumbnail .material_caption {
  padding: 10px 20px;
}
.material_thumbnail .material_btn {
  font-size: 16px;
  color: #ffab40;
  text-decoration: none;
  padding: 10px 0;
  border: none;
  -webkit-transition: color 0.4s ease-out 0s;
  transition: color 0.4s ease-out 0s;
}
.material_thumbnail .material_btn:hover,
.material_thumbnail .material_btn:active,
.material_thumbnail .material_btn:focus {
  background: none;
  box-shadow: none;
}
.material_thumbnail:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.42);
}



</style>