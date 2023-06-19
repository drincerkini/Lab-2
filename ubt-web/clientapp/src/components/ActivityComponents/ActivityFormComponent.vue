<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container mt-5 mb-5">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div class="row no-gutters">
                <h3 class="text-center mt-4">Activity</h3>
                <div class="contact-form__wrapper p-5 order-lg-1">
                    <form class="contact-form form-validate" @submit.prevent="handleActivity">

                        <div class="row">
                            <div class="col-sm-12 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="title">Title</label>
                                    <div class="controls">
                                        <textarea placeholder="Your Title"
                                            class="form-control requiredField Highlighted-label" rows="3"
                                            id="title" v-model="this.title">...</textarea>
                                        </div>
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="category">Category</label>
                                    <input id="category" v-model="this.category" type="text" class="form-control"
                                        placeholder="Category " />
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
                        <button type="submit" name="submit" class="btn btn-success">ADD ACTIVITY</button>
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
            category: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleActivity() {
            try {
                await this.$store.dispatch('activityModule/addActivity', this.formData);
                this.$router.push('/activities')
            } catch (err) {
                console.log('error ---- ', err.message);
            }

        }
    },
    computed: {
        formData() {
            const data = new FormData();
            data.append('title', this.title);
            data.append('category', this.category);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>