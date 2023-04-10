<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container mt-5 mb-5">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div class="row no-gutters">
                <h3 class="text-center mt-4">Add Service</h3>
                <div class="contact-form__wrapper p-5 order-lg-1">
                    <form class="contact-form form-validate" @submit.prevent="handleAddService">
                        
                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="firstName">Title</label>
                                    <input id="title" v-model="this.title" type="text" class="form-control" placeholder="Title"/>
                                </div>
                            </div>
        
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="lastName">Price</label>
                                    <input id="price" v-model="this.price" type="number" class="form-control" placeholder="Price €"/>
                                </div>
                            </div>
        
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="email">Category</label>
                                    <input type="text" class="form-control" v-model="this.category" placeholder="Category">
                                </div>
                            </div>
        
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="phone">Select Image</label>
                                    <input class="form-control" id="image" ref="imageInput" type="file" @change="handleImageChange" >
                                </div>
                            </div>
        
                            <div class="col-sm-12 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="message">Description</label>
                                    <textarea class="form-control" id="description" v-model="this.description" rows="4" placeholder="Describe the service....."></textarea>
                                </div>
                            </div>
        
                            <div class="d-grid gap-2 col-6 mx-auto ">
                                <button type="submit" name="submit" class="btn btn-success">ADD SERVICE</button>
                            </div>
        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    </template>

<script>

export default {
    data() {
        return {
            title: '',
            description: '',
            price: null,
            category: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddService(){
            try{
                await this.$store.dispatch('serviceModule/addService', this.formData);
                this.$router.push('/services')
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
            data.append('price', this.price);
            data.append('category', this.category);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>