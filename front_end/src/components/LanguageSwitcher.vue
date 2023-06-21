<template>
    <div class="d-flex" v-for="lang in languages" :key="lang">
        <a
                :class="{ 'language-switcher__item--active': lang === currentLanguage }"
                class="language-switcher__item me-2"
                @click="switchLanguage(lang)"
        >
            {{ lang }}
        </a>
    </div>
</template>

<script>
import {useI18n} from 'vue-i18n';
import {computed} from 'vue';

export default {
    setup() {
        const {locale, t} = useI18n();
        const languages = computed(() => {
            return ['en', 'ua'];
        });

        const currentLanguage = computed(() => {
            return locale.value;
        });

        const switchLanguage = (lang) => {
            locale.value = lang;
        };

        return {
            t,
            languages,
            currentLanguage,
            switchLanguage,
        };
    },
};

</script>

<style scoped>
.language-switcher__item{
    cursor: pointer;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
}

.language-switcher__item--active {
    font-weight: bold;
}
</style>
