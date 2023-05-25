import Question from '../components/Question.vue';

<template>
    <h1 class="d-flex justify-content-center">{{ votingName }}</h1>
    <form action="/home">

        <Question v-for="(question, index) in questions" :key="index" :index="index + 1" :question="question.question"
            :options="question.options" @change-option="updateResults" />

        <button type="button" class="btn btn-primary" action="submit" @click="showResults">Submit</button>
    </form>
</template>

<script setup>
import Question from '../components/Question.vue';

const votingName = 'Voting name';

const questions = [
    {
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        options: [
            'Option 1',
            'Option 2',
            'Option 3'
        ]
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        options: [
            'Option 1',
            'Option 2',
        ]
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        options: [
            'Option 1',
            'Option 2',
            'Option 3',
            'Option 4'
        ]
    }
];

const results = new Map();

const updateResults = (index, answer) => {
    results[index] = answer;
}

const showResults = () => {
    console.log(JSON.stringify(results));
}

</script>