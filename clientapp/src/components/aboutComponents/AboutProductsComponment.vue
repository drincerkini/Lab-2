<template>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<section id="about-section" class="pt-5 pb-5">
    <div class="container wrapabout">
        <div class="red"></div>
        <div class="row">
            <div class="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                <div class="blockabout">
                    <div class="blockabout-inner text-center text-sm-start">
                        <div class="title-big pb-3 mb-3">
                            <h3>ABOUT US</h3>
                        </div>
                        <p class="description-p text-muted pe-0 pe-lg-0">
                            A medical aesthetic clinic is a type of healthcare facility that specializes in providing cosmetic treatments and procedures to improve the appearance and health of a patient's skin and body.
                        </p>
                        <p class="description-p text-muted pe-0 pe-lg-0">The goal of medical aesthetic clinics is to help patients achieve their desired cosmetic results while prioritizing their safety and well-being.</p>
                        <div class="sosmed-horizontal pt-3 pb-3">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                        </div>
                        <a href="#" class="btn rey-btn mt-3">See Our Products</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0">
                <figure class="potoaboutwrap">
                    <img src="../../../public/img/aboutus.jpeg" alt="potoabout" />
                </figure>
            </div>
        </div>
    </div>
</section>


</template>


<style scoped>

/***********************List group***********************/
.material_list_group .material_list_group_item {
  color: #fff;
  font-weight: 400;
  border-radius: 0;
  background-color: #4092d9;
  -webkit-transition: background-color 0.2s ease-out 0s;
  transition: background-color 0.2s ease-out 0s;
}
.material_list_group .material_list_group_item:hover {
  background-color: #336ea1;
}
.material_list_group .disabled:hover {
  background-color: #4092d9;
  color: #ffffff;
}
.material_list_group .material_badge {
  background-color: #fff;
  border-color: #ffffff;
}

body{margin-top:20px;}				                                  
#about-section {
    background: rgba(32, 33, 36, 0.1);
    position: relative;
}

.blockabout {
    padding: 20px;
    background: white;
}

.blockabout-inner {
    padding: 30px;
    border: 1px solid rgba(32, 33, 36, 0.1);
}

.sosmed-horizontal a i {
    border: 1px solid #070707;
    border-radius: 50%;
    color: #070707;
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    margin: auto 3px;
    font-size: 15px;
    text-align: center;
    transition: all 0.3s;
}

.rey-btn {
    border: 2px solid #070707;
    padding: 10px 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 50px;
    transition: all 0.3s;
}


body{
    margin-top:20px;
    backgroundColor:#eee;
}
.home-5-bg {
    background: #1E90FF;
    position: relative;
    background-size: cover;
    height: 50vh;
    background-position: center center;
}

.section {
    position: relative;
}

.home-5-content {
  z-index: 1;
  position: relative;
}

.bg-overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.home-center {
    display: table;
    width: 100%;
    height: 100%;
}

.home-desc-center {
    display: table-cell;
    vertical-align: middle;
}

.home-5-content {
    z-index: 1;
    position: relative;
}

.text-white-70 {
    color: rgba(255, 255, 255, 0.8);
}

.f-15 {
    font-size: 15px;
}

.home-5-bg #particles-js {
    z-index: 1!important;
position: absolute;
    width: 100%;
    height: 100%;
}
</style>