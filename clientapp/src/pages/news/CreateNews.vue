<template>
    <h3>Create Service</h3>

    <form @submit.prevent="handleAddNews">
      <label for="name">Title:</label>
      <input id="name" v-model="this.title" type="text" />
  
      <label for="description">Description:</label>
      <input id="description" v-model="this.description" type="text" />
  
      <label for="image">Image:</label>
      <input id="image" ref="imageInput" type="file" @change="handleImageChange" />
  
      <button type="submit">Submit</button>
</form>

</template>

<script>

export default {
    data() {
        return {
            title: '',
            description: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddNews(){
            try{
                await this.$store.dispatch('newsModule/addNews', this.formData);
                this.$router.push('/')
            }catch(err){
                console.log('error ---- ', err.message);
            }
            
        }
    },
    computed: {
        formData(){
            const data = new FormData();
            data.append('title', this.title);
            data.append('description', this.description);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>