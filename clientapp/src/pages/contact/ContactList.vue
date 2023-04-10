<template>
<br />
<br />
<br />
<br />


<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in this.contacts" :key="contact._id">
              <th scope="row">1</th>
              <td>{{contact.name}}</td>
              <td>{{contact.surname}}</td>
              <td>{{contact.email}}</td>
              <td>{{contact.phone}}</td>
              <td>{{contact.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<br />
<br />
<br />
<br />
</template>

<script>
import { mapState } from 'vuex';
        
        export default {
            // components: {
            //     CardComponent
            // },
    
            computed : {
            //   ...mapState(['products']),
              ...mapState('contactModule', ['contacts'])
            },
            created() {
              this.$store.dispatch('contactModule/getContact');
            },
            methods: {
              async handleDelete(teamId){
                if (window.confirm("Do you really want to delete?")) {
                  try {
                    this.$store.dispatch('deleteContact', teamId);
                  }catch(err) {
                    console.log("erro", err.message);
                  }
                }
              }
            }
        }

</script>