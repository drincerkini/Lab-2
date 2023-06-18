<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container mt-5 mb-5">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div class="row no-gutters">
                <h3 class="text-center mt-4">Add News</h3>
                <div class="contact-form__wrapper p-5 order-lg-1">
                    <form class="contact-form form-validate" @submit.prevent="handleAddNews">

                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="title">Title</label>
                                    <input id="title" v-model="this.title" type="text" class="form-control"
                                        placeholder="Title" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <input id="description" v-model="this.description" type="text" class="form-control"
                                        placeholder="Description " />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="phone">Select Image</label>
                                    <input class="form-control" id="image" ref="imageInput" type="file"
                                        @change="handleImageChange">
                                </div>
                            </div>

                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto ">
                        <button type="submit" name="submit" class="btn btn-success">ADD NEWS</button>
                    </div>
                    </form>
                 
                </div>
            </div>
        </div>
    </div>
</template>



<script>

export default {
  watch: {
  },
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
        async handleAddNews() {
            try {
                await this.$store.dispatch('newsModule/addNews', this.formData);
                this.$router.push('/')
            } catch (err) {
                console.log('error ---- ', err.message);
            }

        }
    },
    computed: {
        formData() {
            const data = new FormData();
            data.append('title', this.title);
            data.append('description', this.description);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>