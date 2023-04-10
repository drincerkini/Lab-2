<template>

<AboutPoroductsComponent />
<AboutServicesComponent />
<ReviewsComponentVue />
<TeamComponent />


</template>

<script>
import TeamComponent from '../components/TeamComponent.vue';
import ReviewsComponentVue from '@/components/ReviewsComponent.vue';
import AboutPoroductsComponent from '../components/aboutComponents/AboutProductsComponment.vue';
import AboutServicesComponent from '../components/aboutComponents/AboutServicesComponent.vue';

export default {
    components: {
        TeamComponent,
        ReviewsComponentVue,
        AboutPoroductsComponent,
        AboutServicesComponent
    }
}
</script>


