<template>
    <h3>Create Service</h3>

    <form @submit.prevent="handleAddTeam">
      <label for="name">Nmae:</label>
      <input id="name" v-model="this.name" type="text" />
  
      <label for="description">Surname:</label>
      <input id="description" v-model="this.surname" type="text" />

      <label for="category">Position:</label>
      <input id="category" v-model="this.position" type="text" />
  
      <label for="image">Image:</label>
      <input id="image" ref="imageInput" type="file" @change="handleImageChange" />
  
      <button type="submit">Submit</button>
</form>

</template>

<script>

export default {
    data() {
        return {
            name: '',
            surname: '',
            position: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddTeam(){
            try{
                await this.$store.dispatch('teamModule/addTeam', this.formData);
                this.$router.push('/')
            }catch(err){
                console.log('error ---- ', err.message);
            }
            
        }
    },
    computed: {
        formData(){
            const data = new FormData();
            data.append('name', this.name);
            data.append('surname', this.surname);
            data.append('position', this.position);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>