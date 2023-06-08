<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container mt-5 mb-5">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div class="row no-gutters">
                <h3 class="text-center mt-4">Add Professors</h3>
                <div class="contact-form__wrapper p-5 order-lg-1">
                    <form class="contact-form form-validate" @submit.prevent="handleAddProfessors">

                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="name">Name</label>
                                    <input id="name" v-model="this.name" type="text" class="form-control"
                                        placeholder="Name" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="surname">Surname</label>
                                    <input id="surname" v-model="this.surname" type="text" class="form-control"
                                        placeholder="Surname" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="Department">Department</label>
                                    <input id="department" v-model="this.department" type="text" class="form-control"
                                        placeholder="Department" />
                                </div>
                            </div>

                             <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="Degree">Degree</label>
                                    <input id="degree" v-model="this.degree" type="text" class="form-control"
                                        placeholder="Degree" />
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
                        <button type="submit" name="submit" class="btn btn-success">ADD PROFESSOR</button>
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
            name: '',
            surname: '',
            department: '',
            degree: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddProfessors() {
            try {
                await this.$store.dispatch('professorModule/addProfessors', this.formData);
                this.$router.push('/')
            } catch (err) {
                console.log('error ---- ', err.message);
            }

        }
    },
    computed: {
        formData() {
            const data = new FormData();
            data.append('name', this.name);
            data.append('surname', this.surname);
            data.append('department', this.department);
            data.append('degree', this.degree);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>