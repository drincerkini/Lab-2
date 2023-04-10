<template>
  <br />
  <br />
  <br />

  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div class="container bootstrap snippets bootdey">
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="panel panel-dark panel-colorful">
          <div class="panel-body text-center">
            <router-link to="/contact-list" class="text-white">
              <p class="text-uppercase mar-btm text-sm">COMMENTS</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="currentColor"
                class="bi bi-clipboard2-plus-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"
                />
                <path
                  d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"
                />
              </svg>
              <hr />
              <p class="h2 text-thin">{{ this.numberOfContacts }}</p>
              <small
                ><span class="text-semibold"
                  ><i class="fa fa-unlock-alt fa-fw"></i>
                  {{ this.numberOfContacts }}</span
                >
                Comments</small
              >
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="panel panel-danger panel-colorful">
          <div class="panel-body text-center">
            <router-link to="/create-service" class="text-white">
              <p class="text-uppercase mar-btm text-sm">ADD SERVICE</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="currentColor"
                class="bi bi-clipboard2-plus-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"
                />
                <path
                  d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"
                />
              </svg>
              <hr />
            </router-link>
            <router-link to="services" class="text-white">
              <p class="h2 text-thin">{{ this.numberOfServices }}</p>
              <small
                ><span class="text-semibold"
                  ><i class="fa fa-unlock-alt fa-fw"></i>
                  {{ this.numberOfServices }}</span
                >
                Services</small
              >
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="panel panel-primary panel-colorful">
          <div class="panel-body text-center">
            <router-link to="create-product" class="text-white">
              <p class="text-uppercase mar-btm text-sm">ADD PRODUCT</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="currentColor"
                class="bi bi-clipboard2-plus-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"
                />
                <path
                  d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"
                />
              </svg>
              <hr />
            </router-link>
            <router-link to="products" class="text-white">
              <p class="h2 text-thin">{{ this.numberOfProducts }}</p>
              <small
                ><span class="text-semibold"
                  ><i class="fa fa-unlock-alt fa-fw"></i>
                  {{ this.numberOfProducts }}</span
                >
                Products</small
              >
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="panel panel-info panel-colorful">
          <div class="panel-body text-center">
            <router-link to="/create-news" class="text-white">
              <p class="text-uppercase mar-btm text-sm">ADD NEWS</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="currentColor"
                class="bi bi-clipboard2-plus-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"
                />
                <path
                  d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"
                />
              </svg>
              <hr />
              <p class="h2 text-thin">{{ this.numberOfNews }}</p>
              <small
                ><span class="text-semibold"
                  ><i class="fa fa-unlock-alt fa-fw"></i>
                  {{ this.numberOfNews }}</span
                >
                News</small
              >
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="panel panel-info panel-colorful">
          <div class="panel-body text-center">
            <router-link to="/create-reviews" class="text-white">
              <p class="text-uppercase mar-btm text-sm">ADD REVIEWS</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                fill="currentColor"
                class="bi bi-clipboard2-plus-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"
                />
                <path
                  d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"
                />
              </svg>
              <hr />
              <p class="h2 text-thin">{{ this.numberOfNews }}</p>
              <small
                ><span class="text-semibold"
                  ><i class="fa fa-unlock-alt fa-fw"></i>
                  {{ this.numberOfNews }}</span
                >
                News</small
              >
            </router-link>
          </div>
        </div>
      </div>ß
    </div>
  </div>

  <br />
  <br />
  <br />
</template>

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

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("serviceModule", ["services"]),
    ...mapGetters("serviceModule", ["numberOfServices"]),
    ...mapState("contactModule", ["contacts"]),
    ...mapGetters("contactModule", ["numberOfContacts"]),
    ...mapState("productModule", ["products"]),
    ...mapGetters("productModule", ["numberOfProducts"]),
    ...mapState("newsModule", ["news"]),
    ...mapGetters("newsModule", ["numberOfNews"]),
  },
  created() {
    this.$store.dispatch("serviceModule/getServices");
    this.$store.dispatch("contactModule/getContact");
    this.$store.dispatch("productModule/getProducts");
    this.$store.dispatch("newsModule/getNews");
  },
  methods: {
    async handleDelete(serviceId) {
      if (window.confirm("Do you really want to delete?")) {
        try {
          this.$store.dispatch("deleteService", serviceId);
        } catch (err) {
          console.log("erro", err.message);
        }
      }
    },
  },
};
</script>
