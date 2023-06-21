<script setup>
import {RouterView} from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Navbar/>
    <main class="container pt-2">
        <RouterView/>
    </main>
    <Footer/>
</template>
