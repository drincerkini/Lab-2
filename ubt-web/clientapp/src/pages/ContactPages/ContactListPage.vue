<template> 

<h1 class="fs-10 fw-bold text-dark text-center m-3 p-3 font-monospace">LIST OF CONTACTS! </h1>

<ContactTableComponent />

</template>


<script>
import ContactTableComponent from '../../components/ContactComponents/ContactTableComponent.vue'

export default {
    components: {
        ContactTableComponent
    }
}

</script>