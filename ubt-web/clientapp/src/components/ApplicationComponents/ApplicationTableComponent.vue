<template>
<br />
<br />
<br />
<br />


<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Birth Date</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="application in this.applications" :key="application._id">
              <th scope="row">1</th>
              <td>{{application.name}}</td>
              <td>{{application.surname}}</td>
              <td>{{application.email}}</td>
              <td>{{application.birthdate}}</td>
              <td>{{application.address}}</td>
              <td>{{application.phone}}</td>
              <td>{{application.department}}</td>
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
    
            computed : {
              ...mapState('applicationModule', ['applications'])
            },
            created() {
              this.$store.dispatch('applicationModule/getApplication');
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