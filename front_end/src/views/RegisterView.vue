<template>
    <div class="container mt-5">
        <h1>Registration</h1>
        <form @submit="submitForm">
            <label for="num">Number:</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="num" :value="state.num" required>

                <button type="button" class="btn btn-primary" @click="generateNumber">Generate</button>
            </div>
            <button type="submit" class="btn btn-success">Register</button>
        </form>
    </div>
</template>

<script>
import {reactive} from 'vue';
import {sendPostRequest} from "../js/requests";

export default {
    setup() {
        const state = reactive({
            num: '',
        });
        const submitForm = (event) => {
            event.preventDefault();
            // Perform form validation and submission logic here
            console.log('Form submitted!');
            // get numbers from state.num as an array
            // state.num = state.num.split(',').map(Number);
            // send the array to the backend
            sendPostRequest('http://localhost:8888/register', {"bytes": state.num.split(',').map(Number)}, (response) => {
                console.log(response);
            })
        };
        return {state, submitForm};
    },
    methods: {
        generateNumber() {
            this.state.num = crypto.getRandomValues(new Uint8Array(32)).join(', ');
        }
    }
};
</script>
<style>
/* Add custom styles if needed */
</style>
