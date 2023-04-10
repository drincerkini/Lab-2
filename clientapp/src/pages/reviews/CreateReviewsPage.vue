<template>
    <br />
    <br />
    <br />
    <section id="about-section" class="pt-5 pb-5">
        <div class="container wrapabout">
            <div>
                <link rel="stylesheet" type="text/css"
                    href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
                <div class="container bootstrap snippets bootdey">
                    <section id="contact" class="gray-bg padding-top-bottom">
                        <div class="container bootstrap snippets bootdey">
                            <div class="row">
                                <form class="col-sm-6 col-sm-offset-3" @submit.prevent="handleAddNews">
                                    <div class="form-group">
                                        <label class="control-label" for="client">Name</label>
                                        <div class="controls">
                                            <input name="client" placeholder="Your name"
                                                class="form-control requiredField Highlighted-label" type="text" id="client"
                                                v-model="this.review.client">
                                        </div>
                                    </div><!-- End name input -->
                                    <div class="form-group">
                                        <label class="control-label" for="contact-message">Message</label>
                                        <div class="controls">
                                            <textarea placeholder="Your message"
                                                class="form-control requiredField Highlighted-label" rows="6"
                                                id="description" v-model="this.review.description">...</textarea>
                                        </div>
                                    </div><!-- End textarea -->

                                    <br />
                                    <br />

                                    <button type="submit" class="btn btn-info btn-block">Send Review</button>
                                </form><!-- End Highlighted-form -->
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            review: {
                client: '',
                description: '',
            }

        }
    },

    methods: {

        async handleAddNews() {
            try {
                await this.$store.dispatch('reviewsModule/addReviews', this.review);
                this.$router.push('/')
            } catch (err) {
                console.log('error ---- ', err.message);
            }

        }
    }
}



</script>