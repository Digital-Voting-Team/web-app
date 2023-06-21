<template>
    <div class="container-fluid mt-auto bg-dark">
        <div class="container">
            <footer class="py-3">
                <p class="text-light m-0">© Digital Voting Ltd. {{ currentYear }}</p>
            </footer>
        </div>
    </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>