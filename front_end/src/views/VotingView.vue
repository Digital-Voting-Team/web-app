import Question from '../components/Question.vue';

<template>
    <h1 class="d-flex justify-content-center">{{ votingName }}</h1>
    <form action="/home">

        <Question v-for="(question, index) in questions" :key="index" :index="index + 1" :question="question.question"
                  :options="question.options" @change-option="updateResults"/>

        <button type="button" class="btn btn-primary" action="submit" @click="showResults">{{ $t("voting.submit") }}
        </button>
    </form>
</template>

<script setup>
import Question from '../components/Question.vue';

let votingName = 'Голосування за голову СПФ КНК';

const questions = [
    {
        question: 'Чи підтримуєте Ви Ілона Маска на посаду голови СПФ КНК?',
        options: [
            'Так',
            'Ні',
            'Утримуюсь'
        ]
    },
];

const results = new Map();

const updateResults = (index, answer) => {
    results[index] = answer;
}

const showResults = () => {
    console.log(JSON.stringify(results));
}

</script>