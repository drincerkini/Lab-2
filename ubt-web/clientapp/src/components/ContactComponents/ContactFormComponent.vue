<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container mt-5 mb-5">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div class="row no-gutters">
                <h3 class="text-center mt-4">Contact us!</h3>
                <div class="contact-form__wrapper p-5 order-lg-1">
                    <form class="contact-form form-validate" @submit.prevent="handleAddContact">

                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="name">Name</label>
                                    <input id="name" v-model="this.contact.name" type="text" class="form-control"
                                        placeholder="Name" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="surname">Surname</label>
                                    <input id="surname" v-model="this.contact.surname" type="text" class="form-control"
                                        placeholder="surname" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="email">Email</label>
                                    <input id="email" v-model="this.contact.email" type="email" class="form-control"
                                        placeholder="email" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="phone">Phone Number</label>
                                    <input id="phone" v-model="this.contact.phone" type="text" class="form-control"
                                        placeholder="phone" />
                                </div>
                            </div>

                           <div class="form-group">
                                <label class="control-label" for="message">Message</label>
                                <div class="controls">
                                    <textarea placeholder="Your message"
                                        class="form-control requiredField Highlighted-label" rows="6"
                                        id="message" v-model="this.contact.message">...</textarea>
                                </div>
                            </div><!-- End textarea -->
                           
                            
                        </div>

                        <br />
                        <br />


                        <div class="d-grid gap-2 col-6 mx-auto ">
                        <button type="submit" name="submit" class="btn btn-dark">SEND</button>
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
            contact: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: '',
            }
            
        }
    },

    methods: {
        async handleAddContact() {
            try {
                await this.$store.dispatch('contactModule/addContact', this.contact);
                this.$router.push('/')
            } catch (err) {
                console.log('error ---- ', err.message);
            }

        }
    }
}



</script>