<template>
    <h1>{{ $t("about.title") }}</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mb-4">
        <div v-for="(mate, index) in teammates" :key="index" class="col">
            <AboutCard :name="$t('about.' + mate.name)" :description="$t('about.' + mate.name + '_description')"
                       :image="mate.image"/>
        </div>
    </div>
</template>

<script setup>

import AboutCard from "@/components/AboutCard.vue";

// define array for cards
const teammates = [
    {name: "nazarii", image: "../public/avatars/nazarii.jpeg"},
    {name: "anton", image: "../public/avatars/anton.jpeg"},
    {name: "ruslan", image: "../public/avatars/ruslan.jpeg"}
]

</script>