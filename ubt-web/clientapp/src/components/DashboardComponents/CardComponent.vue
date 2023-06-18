<template>

<link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
/>

<div class="col-md-3 col-sm-6 col-xs-12">
    <div :class="this.color ">
        <div class="panel-body text-center">

            <router-link :to="this.pathOf" class="text-white">
                <p class="text-uppercase mar-btm text-sm">{{title}}</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-clipboard2-plus-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                    <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>

                <hr />

                <small> 
                    <span class="text-semibold" ><i class="fa fa-unlock-alt fa-fw"></i>
                        {{ this.numberOf }}
                    </span>
                    Comments
                </small>
            </router-link>

        </div>
    </div>
</div>

</template>

<script>

export default {
    props: {
        title: String,
        numberOf: Number,
        pathOf: String,
        color: String
    }
}

</script>

<style scoped>
body {
  background: #eee;
  margin-top: 20px;
}

.panel {
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0;
  border: 0;
  margin-bottom: 24px;
}

.panel-dark.panel-colorful {
  background-color: #3b4146;
  border-color: #3b4146;
  color: #fff;
}

.panel-danger.panel-colorful {
  background-color: #f76c51;
  border-color: #f76c51;
  color: #fff;
}

.panel-primary.panel-colorful {
  background-color: #5fa2dd;
  border-color: #5fa2dd;
  color: #fff;
}

.panel-info.panel-colorful {
  background-color: #4ebcda;
  border-color: #4ebcda;
  color: #fff;
}

.panel-body {
  padding: 25px 20px;
}

.panel hr {
  border-color: rgba(0, 0, 0, 0.1);
}

.mar-btm {
  margin-bottom: 15px;
}

h2,
.h2 {
  font-size: 28px;
}

.small,
small {
  font-size: 85%;
}

.text-sm {
  font-size: 0.9em;
}

.text-thin {
  font-weight: 300;
}

.text-semibold {
  font-weight: 600;
}
</style>