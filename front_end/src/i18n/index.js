import {createI18n} from "vue-i18n";

const messages = {
    en: {
        navbar: {
            home: 'Home',
            votings: 'Votings',
            register: 'Register',
            about: 'About',
            groups: 'Groups',
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
            anton_description: 'I am a 4th year undergraduate student at Faculty of Computer Science and Cybernetics of Taras Shevchenko National University of Kyiv. I am a Software Engineer, passionate about AI, keen on programming in Python, GoLang, Java, C++programming languages. Got a chance to try out several frameworks, namely Spring for Java, Ruby on Rails for Ruby. Also familiar with SQL, MatLab, Maple, Git, UnrealEngine. Looking forward to learning more about AI and Machine Learning.',
            ruslan: 'Ruslan Volchetskyi',
            ruslan_description: "Software Engineer, 4th year student at Faculty of Computer Science and Cybernetics of Taras Shevchenko National University of Kyiv with a great set of skills like Python, Java, Go, C++, knowledge of SQL, Git, UnrealEngine and vast potential for software development and computer science. I'm really fond of AI, game development and problem solving as well as collaborative work and team communication. As an astute student, I'm looking for different opportunities in various fields of IT.",
        }
    },
    ua: {
        navbar: {
            home: 'Головна',
            votings: 'Голосування',
            register: 'Реєстрація',
            about: 'Про нас',
            groups: 'Групи',
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
            anton_description: "Я навчаюся на 4 курсі бакалаврату факультету комп'ютерних наук та кібернетики Київського національного університету імені Тараса Шевченка. За фахом я інженер-програміст, захоплююся штучним інтелектом, захоплююся програмуванням на мовах програмування Python, GoLang, Java, C++. Мав нагоду спробувати декілька фреймворків, а саме Spring для Java, Ruby on Rails для Ruby. Також знайомий з SQL, MatLab, Maple, Git, UnrealEngine. З нетерпінням чекаю можливості дізнатися більше про штучний інтелект та машинне навчання.",
            ruslan: 'Руслан Волчецький',
            ruslan_description: "Інженер-програміст, студент 4-го курсу факультету комп'ютерних наук та кібернетики Київського національного університету імені Тараса Шевченка з великим набором навичок, таких як Python, Java, Go, C++, знання SQL, Git, UnrealEngine та величезним потенціалом для розробки програмного забезпечення та комп'ютерних наук. Я дуже люблю штучний інтелект, розробку ігор та вирішення проблем, а також спільну роботу та командну комунікацію. Як кмітливий студент, я шукаю різні можливості в багатьох галузях ІТ.",
        }
    }
}


export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages
})