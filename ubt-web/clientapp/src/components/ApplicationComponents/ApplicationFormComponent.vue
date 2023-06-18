<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container mt-5 mb-5">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div class="row no-gutters">
                <h3 class="text-center mt-4">Apply for University</h3>
                <div class="contact-form__wrapper p-5 order-lg-1">
                    <form class="contact-form form-validate" @submit.prevent="handleAddApplication">

                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="name">Name</label>
                                    <input id="name" v-model="this.application.name" type="text" class="form-control"
                                        placeholder="Name" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="surname">Surname</label>
                                    <input id="surname" v-model="this.application.surname" type="text" class="form-control"
                                        placeholder="surname" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="email">Email</label>
                                    <input id="email" v-model="this.application.email" type="email" class="form-control"
                                        placeholder="email" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="birthdate">Date of Birth</label>
                                    <input id="birthdate" v-model="this.application.birthdate" type="date" class="form-control"
                                        placeholder="birthdate" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="address">Address</label>
                                    <input id="address" v-model="this.application.address" type="text" class="form-control"
                                        placeholder="address" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="phone">Phone Number</label>
                                    <input id="phone" v-model="this.application.phone" type="text" class="form-control"
                                        placeholder="phone" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="department">Department</label>
                                    <input id="department" v-model="this.application.department" type="text" class="form-control"
                                        placeholder="department" />
                                </div>
                            </div>

                            
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto ">
                        <button type="submit" name="submit" class="btn btn-dark">APPLY</button>
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
            application: {
                name: '',
                surname: '',
                email: '',
                birthdate: '',
                address: '',
                phone: '',
                department: '',
            }
            
        }
    },

    methods: {
        async handleAddApplication() {
            try {
                await this.$store.dispatch('applicationModule/addApplication', this.application);
                this.$router.push('/')
            } catch (err) {
                console.log('error ---- ', err.message);
            }

        }
    }
}



</script>