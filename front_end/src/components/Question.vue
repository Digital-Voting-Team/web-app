<template>
    <div class="card border-success mb-2">
        <div class="card-header">
            <label class="card-text">{{ $t("question.question") }} {{ index }}. {{ question }}</label>
        </div>

        <div class="card-body">
            <select class="form-select form-control" @change=emitEvent>'
                <option selected>{{$t("question.choose")}}</option>
                <option v-for="option in options" :key="option">{{ option }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const { index, question, options } = defineProps({
    index: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    }
});

const result = ref('');

const emit = defineEmits(['change-option'])

const emitEvent = () => {
    result.value = event.target.value;

    emit('change-option', index, result.value)
}
</script>