import {createI18n} from "vue-i18n";

const messages = {
    en: {
        navbar: {
            home: 'Home',
            votings: 'Votings',
            register: 'Register',
            about: 'About',
            groups: 'Groups',
            create_group: 'Create New Group',
        },
        home: {
            title: 'Our Project',
            label_1: 'NodeConnector and WebApp',
            description_1: "Nazarii Savorona's part",
            label_2: 'Blockchain',
            description_2: "Anton Balykov's part",
            label_3: 'Digital Signatures',
            description_3: "Ruslan Volchetskyi's part",
        },
        voting: {
            submit: 'Submit',
        },
        registration:{
            title: 'Registration',
            input_label: 'Private Key',
            submit : 'Register',
            generate_button: 'Generate',
        },
        question: {
            question: 'Question',
            choose: 'Choose...',
        },
        about: {
            title: 'Our Team',
            nazarii: 'Nazarii Savorona',
            nazarii_description: 'A highly accomplished, skilled and knowledgeable computer science student with extensive knowledge of programming and computer applications. Looking for an opportunity in the field of information technology as computer programmer in a renowned organization.',
            anton: 'Anton Balykov',
            anton_description: 'I am a 4th year undergraduate student at Faculty of Computer Science and Cybernetics of Taras Shevchenko National University of Kyiv. I am a Software Engineer, passionate about AI, keen on programming in Python, GoLang, Java, C++programming languages. Looking forward to learning more about AI and Machine Learning.',
            ruslan: 'Ruslan Volchetskyi',
            ruslan_description: "I'm a fourth-year software engineering student keen on innovative technologies. Skilled in a range of programming languages and technologies, including Python, Go, Java, C++, git and PostgreSQL. Participated in many olympiads and hackathons, including team competitions, thereby building collaboration and communication skills as well as enhancing ability to adapt to changing requirements and circumstances. As an astute student, I'm looking for different opportunities in various fields of IT.",
        },
    },
    ua: {
        navbar: {
            home: 'Головна',
            votings: 'Голосування',
            register: 'Реєстрація',
            about: 'Про нас',
            groups: 'Групи',
            create_group: 'Створити Нову Групу',
        },
        home: {
            title: 'Наш Проєкт',
            label_1: "Вузол-з'єднувач та Вебзастосунок",
            description_1: "Робота Назарія Саворони",
            label_2: 'Блокчейн',
            description_2: "Робота Антона Баликова",
            label_3: 'Цифрові Підписи',
            description_3: "Робота Руслана Волчецького",
        },
        voting: {
            submit: 'Надіслати',
        },
        registration:{
            title: 'Реєстрація',
            input_label: 'Приватний Ключ',
            submit : 'Зареєструватися',
            generate_button: 'Згенерувати',
        },
        question: {
            question: 'Питання',
            choose: 'Оберіть варіант...',
        },
        about: {
            title: 'Наша Команда',
            nazarii: 'Назарій Саворона',
            nazarii_description: 'Високоосвічений, кваліфікований та обізнаний студент комп\'ютерних наук з глибокими знаннями програмування та комп\'ютерних додатків. Шукаю можливість працювати в галузі інформаційних технологій програмістом у відомій організації.',
            anton: 'Антон Баликов',
            anton_description: "Я навчаюся на 4 курсі бакалаврату факультету комп'ютерних наук та кібернетики Київського національного університету імені Тараса Шевченка. За фахом я інженер-програміст, захоплююся штучним інтелектом, захоплююся програмуванням на мовах програмування Python, GoLang, Java, C++. З нетерпінням чекаю можливості дізнатися більше про штучний інтелект та машинне навчання.",
            ruslan: 'Руслан Волчецький',
            ruslan_description: "Я студент четвертого курсу факультету програмної інженерії, який захоплюється інноваційними технологіями. Володію різними мовами та технологіями програмування, зокрема Python, Go, Java, C++, git та PostgreSQL. Брав участь у багатьох олімпіадах та хакатонах, включаючи командні змагання, тим самим розвиваючи навички співпраці та комунікації, а також підвищуючи здатність адаптуватися до мінливих вимог та обставин. Як кмітливий студент, я шукаю різні можливості в багатьох галузях ІТ.",
        },
    }
}


export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages
})