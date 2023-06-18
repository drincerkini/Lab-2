<template>
  <br />
  <br />
  <br />

  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />

  <h1 class="fs-1 fw-bold text-dark text-center font-monospace pt-0 pb-5">WELCOME ADMINISTRATOR</h1>
  <div class="container bootstrap snippets bootdey">
    <div class="row">

      <CardComponent title="NEWS" :numberOf="this.numberOfNews" pathOf="/create-news" color="panel panel-dark panel-colorful"/>

      <CardComponent title="APPLICATIONS" :numberOf="this.numberOfApplications" pathOf="/application-list" color="panel panel-danger panel-colorful"/>

      <CardComponent title="CONTACTS" :numberOf="this.numberOfContacts" pathOf="/contact-list" color="panel panel-info panel-colorful"/>
      
    </div>
  </div>

  <br />
  <br />
  <br />
</template>


<script>
import { mapState, mapGetters } from "vuex";
import CardComponent from '../components/DashboardComponents/CardComponent'

export default {
  components: {
    CardComponent
  },

  computed: {
    ...mapState("applicationModule", ["applications"]),
    ...mapGetters("applicationModule", ["numberOfApplications"]),
    ...mapState("contactModule", ["contacts"]),
    ...mapGetters("contactModule", ["numberOfContacts"]),
    ...mapState("newsModule", ["news"]),
    ...mapGetters("newsModule", ["numberOfNews"]),
  },
  created() {
    this.$store.dispatch("contactModule/getContact");
    this.$store.dispatch("newsModule/getNews");
  }
};
</script>