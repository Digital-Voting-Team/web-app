<template>
    <h1>Home for your vote!</h1>

    <Carousel :slides=slides></Carousel>
</template>


<script setup>
import Carousel from "@/components/Carousel.vue";

const slides = [
    {
        src: "../diagrams/system.png",
    },
    {
        src: "../diagrams/blockchain.png",
    },
    {
        src: "../diagrams/signature.png",
    },
]
</script>