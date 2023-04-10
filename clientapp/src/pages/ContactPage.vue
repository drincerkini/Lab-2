<template>
    <br />
    <br />
    <br />

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div>
                <a href="#" class="d-inline-block text-dark">
                    <span class="text-muted">Number of contacts </span>
                    <strong>{{ this.numberOfContacts }}</strong>
                </a>
            </div>
            <div class="row no-gutters">
                <div class="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                    <h3 class="color--white mb-5">Get in Touch</h3>

                    <ul class="contact-info__list list-style--none position-relative z-index-101">
                        <li class="mb-4 pl-4">
                            <span><i class="fas fa-envelope"></i></span> support@dft.com
                        </li>
                        <li class="mb-4 pl-4">
                            <span><i class="fas fa-phone"></i></span> +38345454454
                        </li>
                        <li class="mb-4 pl-4">
                            <span><i class="fas fa-map-marker-alt"></i></span> DFT Technologies Inc.
                            <br> Lagjia Kalabria
                            <br> Prishtinë 10000
                            <div class="mt-3">
                                <a href="https://www.google.com/maps" target="_blank"
                                    class="text-link link--right-icon text-white">Get directions <i
                                        class="link__icon fa fa-directions"></i></a>
                            </div>
                        </li>
                    </ul>


                </div>

                <div class="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                    <form @submit.prevent="handleAddNews" class="contact-form form-validate">
                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="firstName">First Name</label>
                                    <input type="text" class="form-control" id="name" v-model="this.contact.name"
                                        placeholder="Wendy">
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" class="form-control" id="surname" v-model="this.contact.surname"
                                        placeholder="Appleseed">
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="email">Email</label>
                                    <input type="text" class="form-control" id="email" v-model="this.contact.email"
                                        placeholder="wendy.apple@seed.com">
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" class="form-control" id="phone" v-model="this.contact.phone"
                                        placeholder="+383-45-454-545">
                                </div>
                            </div>

                            <div class="col-sm-12 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="message">How can we help?</label>
                                    <textarea class="form-control" id="description" v-model="this.contact.description"
                                        rows="4" placeholder="Hi there, I would like to....."></textarea>
                                </div>
                            </div>

                            <div class="col-sm-12 mb-3">
                                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
                <!-- End Contact Form Wrapper -->

            </div>
        </div>
    </div>

    <br />
    <br />
    <br />
</template>

<script>
import { mapState, mapGetters } from 'vuex';


export default {
    data() {
        return {
            contact: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                description: ''
            }

        }
    },
    computed: {
        ...mapState('contactModule', ['contacts']),
        ...mapGetters('contactModule', ['numberOfContacts'])
    },

    created() {
        this.$store.dispatch('contactModule/getContact');
    },
    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddNews() {
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


<style scoped>
body {
    margin-top: 20px;
}



@-webkit-keyframes bi-cycle {
    0% {
        left: 0;
    }

    100% {
        left: 100%;
    }
}

@keyframes bi-cycle {
    0% {
        left: 0;
    }

    100% {
        left: 100%;
    }
}

ol li,
ul li {
    list-style: none;
}

ol,
ul {
    margin: 0;
    padding: 0;
}</style>