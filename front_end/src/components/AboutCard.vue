<template>
    <div class="card">
        <img :src="image" class="card-img-top"
             :alt=name>
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
    </div>
</template>


<script setup>
import {defineProps} from 'vue';

const {image, name, description} = defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

</script>

<style scoped>
.card-img-top {
    height: 410px;
    object-fit: cover;
}

.card:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
    transition: all 0.5s ease-in-out;
    cursor: default;
}

</style>