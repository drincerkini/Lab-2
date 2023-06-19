<!-- <template>

    <br />
    <br />
    <br />
      
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    
    
    <div class="container">
    
      <h2 class="page-header">Custom content</h2>
      <div class="row">
        <div class="col-sm-6 col-md-4" v-for="info in this.news" :key="info._id" >
          <div class="thumbnail material_thumbnail">
            <div class="item-img-wrap ">
              <img 
                :src="'/uploads/' + info.image.filename"
                class="img-responsive"
                alt="Thumbnail label" />
            </div>
            <div class="caption material_caption">
            <h3>{{ info.title }}</h3>
            <p>{{info.description}}</p>
            <p><a href="#" class="btn btn-default material_btn" role="button">{{ info.createdAt }}</a></p>
        </div>
          </div>
    
            
        </div>
      </div>
    
    </div> 
         
    </template> -->

<!-- <template>


    <div class="container bootstrap snippets bootdey">
      <div class="row">
          <div class="col-md-4" v-for="info in this.news" :key="info._id">
              <div class="card card-favorite">
                <div class="card-img-container">
                  <img :src="'/uploads/' + info.image.filename" />
                </div>
                <div class="card-content">
                  <div class="card-meta">
                    <span class="meta-date meta-box">
                      {{info.createdDate}}         
                    </span>
                    <span class="meta-pulse meta-box">
                      <a href="#" class="card-share-number sharrre">{{ info.title }}</a>
                    </span>
                  </div>
                  <h2>
                          <a href="#">
                        {{ info.description }}     
                    </a>   
                  </h2>
                </div>
                  <span class="meta-tags">
                    <a href="#" title="tags" class="tag">{{info.createdAt}}</a> 
                </span>
              </div>
              
        </div>
    </div>
    </div>
        
</template>          
           -->

           <template>
            <div class="container bootstrap snippets bootdey">
            <div class="row">
              <div class="col-md-4" v-for="info in this.activities" :key="info._id">
                <div class="card" >
                  <img :src="'/uploads/' + info.image.filename">
                  <div class="card-body">
                    <h5 class="card-title">{{info.title}}</h5>
                    <p class="card-text">{{ info.category }}</p>
                    <p>{{ info.createdAt }}</p>
                  </div>
                </div>
                </div>
                </div>
                </div>
           </template>


<script>
import { mapState } from 'vuex';

export default {

  computed : {
    ...mapState('activityModule', ['activities'])
  },
  created() {
    this.$store.dispatch('activityModule/getActivity');
  },
  methods: {
    async handleDelete(infoId){
      if (window.confirm("Do you really want to delete?")) {
        try {
          this.$store.dispatch('activityModule/deleteActivity', infoId);
        }catch(err) {
          console.log("erro", err.message);
        }
      }
    }
  }
}
      
</script>


<style>

.card {
    min-width: 0;
    margin: 20px 10px;
    width: 100%;    
    background: #0C0C0C;
    color: #696969;
    -webkit-transition: .3s ease all;
    transition: .3s ease all;
    border: none;
    border-radius: 5px;
    padding: 0;
    margin-bottom: 30px;
}

.card .card-img-container .card-img {
  background-size: cover;
  background-position: top center;
  display: block;
  height: 175px;
}

.card .card-img {
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card .card-img-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.card .card-content {
  padding: 20px 20px 40px;
  text-align: center;
}

.card .card-meta {
  font-size: 12px;
}

.card .meta-box {
  margin-right: 20px;
}

.card .card-content h2 {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.4;
}

.card h2 a {
  color: #D0D0D0;
  -webkit-transition: .3s ease all;
  transition: .3s ease all;
}

a:hover{
    text-decoration:none;    
}

.card:hover h2 a {
  color: #FFF;
}

.card .meta-tags a:hover {
  color: #FFF;
}
.card .meta-tags .tag {
  background: #DD1B16;
  color: #f9c7c6;
}
.card .meta-tags a:last-child {
  margin-right: 0;
  border-bottom-right-radius: 5px;
}
.card .meta-tags a:first-child {
  border-top-left-radius: 5px;
}
.card .meta-tags a {
  display: inline-block;
  padding: 3px 8px;
  color: #FFF;
  -webkit-transition: .3s ease all;
  transition: .3s ease all;
}

</style>