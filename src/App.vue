<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
    <Navbar />
    <main class="container pt-2">
        <RouterView />
    </main>
</template>

<style scoped></style>
