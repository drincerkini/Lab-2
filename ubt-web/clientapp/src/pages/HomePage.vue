<template>
<section id="about-section" class="pt-5 pb-5">
    
  <div >
    <img src="../../public/img/impactbanner.png" style="width: 100%;"/>
  </div>
  
  <br />
  <br />
  <br />

  <div class="container">
    <div>
      <h2>LAJME</h2>
      <hr />
      <NewsCardComponent />
    </div>    
  </div>


  <div class="aplikimiBanner">
    <h1 class="titulli fs-10 fw-bold text-light mt-0 pt-0">DFT University </h1>
    <h4 class="font-monospace fs-1 text-light fw-bolder m-3 p-3">"Zgjedh më të mirin që të bëhesh më i miri"</h4>
    <button class="butoni"><router-link to="/application" class="text-dark" style="text-decoration: none;">APLIKO ONLINE</router-link></button>
  </div>

    <h1 class="titulli fs-10 fw-bold text-dark text-center m-3 p-3 font-monospace">BE PART OF US! </h1>
<CaruselComponent />


</section>
</template>

<script>
import NewsCardComponent from '../components/NewsComponents/NewsCardComponent.vue'
import CaruselComponent from '../components/CaruselComponent'

export default{
  components: { NewsCardComponent,CaruselComponent }
}
</script>

<style scoped >
body {
  background-color: #eee;
  margin-top: 20px;
}

.aplikimiBanner{
  width: 100%;
  height: 400px;
  background-color: #95AD84;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.titulli{
  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #848484;
}

.butoni{
  width: 600px;
  height: 60px;
  color: #eeeee4;
}

.media.media-news {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  padding-bottom: 210px;
}

@media (min-width: 768px) {
  .media.media-news {
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

@media (min-width: 1200px) {
  .media.media-news {
    padding-bottom: 25px;
    margin-bottom: 0;
  }
}

.media.media-news .media-body {
  padding: 20px;
  box-shadow: 0 22px 28px 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  position: absolute;
  width: 85%;
  right: 0;
  bottom: 0;
}

@media (min-width: 768px) {
  .media.media-news .media-body {
    position: relative;
    padding: 46.5px 35px;
    right: 0;
  }
}

@media (min-width: 992px) {
  .media.media-news .media-body {
    right: 40px;
    bottom: 0;
  }
}

@media (min-width: 1200px) {
  .media.media-news .media-body {
    position: absolute;
    right: 35px;
    width: 60%;
    padding: 20px;
  }
}

.media.media-news .media-body .media-date {
  font-family: "Open Sans", sans-serif;
  color: #848484;
  margin-bottom: 10px;
}

.media.media-news .media-body h5 {
  font-size: 22px;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.media.media-news .media-body h5.small {
  font-size: 16px;
}

.media.media-news .media-body p {
  font-family: "Open Sans", sans-serif;
  color: #848484;
}

.media.media-news .media-body .common-btn {
  margin-top: 10px;
}</style>