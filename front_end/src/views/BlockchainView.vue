<template>
    <h1>Blockchain</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="block in blocks" :key="block">
            <Block/>
        </div>
    </div>
</template>

<script setup>
import Block from "@/components/Block.vue";

let blocks = [1, 2, 3, 1, 123,]
</script>