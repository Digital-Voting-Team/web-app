<template>
    <div id="carousel" class="carousel carousel-dark slide" data-bs-ride="false">
        <div class="carousel-inner">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-item"
                 :class="{active: index === 0}">
                <img :src="slide.src" class="d-block w-100 h-100" :alt="$t('home.label_' + (index + 1))">
                <div class="position-relative text-center">
                    <h5> {{ $t("home.label_" + (index + 1)) }}</h5>
                    <p>{{ $t("home.description_" + (index + 1)) }}</p>
                </div>
            </div>
        </div>

        <div class="carousel-indicators position-relative">
            <button v-for="(_, index) in slides" :key="index" type="button"
                    data-bs-target="#carousel" :data-bs-slide-to=index
                    :class="{active: index === 0}"
                    :aria-label="'Slide ' + index"></button>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carousel"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel"
                data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const {slides} = defineProps({
    slides: {
        type: Array,
        required: true
    }
});

</script>


<style>
.carousel-item img {
    object-fit: contain;
}
</style>