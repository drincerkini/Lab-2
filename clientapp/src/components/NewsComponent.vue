<template>

<br />
<br />
<br />
  
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">


<div class="container">

  <h2 class="page-header">Custom content</h2>
  <div class="row">
    <div class="col-sm-6 col-md-4" v-for="info in this.news" :key="info._id">
      <div class="thumbnail material_thumbnail">
        <div class="item-img-wrap ">
          <img :src="'/uploads/' + info.image.filename"
          class="img-responsive"
          alt="Thumbnail label" />
        </div>
        <div class="caption material_caption">
          <h3>{{ info.title }}</h3>
          <p>{{}}</p>
          <p><a href="#" class="btn btn-default material_btn" role="button">{{ info.createdAt }}</a></p>
        </div>
      </div>

      <br />
      <br />
      <br />
        
    </div>
  </div>

</div> 
     
</template>
    
    
    
<script>
  import { mapState } from 'vuex';
  
  export default {

    computed : {
      ...mapState('newsModule', ['news'])
    },
    created() {
      this.$store.dispatch('newsModule/getNews');
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
    
