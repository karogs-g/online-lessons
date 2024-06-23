<script>
import axios from 'axios';
import html2canvas from "html2canvas";
export default {

    data() {
        return {
            // Данные с сервера
            test: null,
            // Новый пост
            content: ``,
            firstName: "",
            lastName: "",
            quiz: {
                title: 'Итоготовое тестирование',
                questions: [
                    {
                        text: "DOM представляет собой",
                        responses: [
                            { text: 'событие, которое происходит, когда кликнули на элемент левой кнопкой мыши' },
                            { text: 'объектную модель документа, с помощью которой можно работать с тегами HTML-документа как с деревом объектов, каждый из которых имеет свой уникальный адрес', correct: true },
                            { text: 'метод поиска, служит для поиска какого-либо элемента в объектной модели документа' },
                        ]
                    }, {
                        text: "Существует ли специальный тип для целых чисел в javaScript?",
                        responses: [
                            { text: 'нет', correct: true },
                            { text: 'да' },
                        ]
                    }, {
                        text: "Оператор && вычисляет аргументы:",
                        responses: [
                            { text: 'справа-налево' },
                            { text: 'такого оператора не существует' },
                            { text: 'слева-направо', correct: true },
                        ]
                    }, {
                        text: "Оператор || останавливается при первом аргументе который",
                        responses: [
                            { text: 'false' },
                            { text: 'undefined' },
                            { text: 'true', correct: true },
                        ]
                    }, {
                        text: "Строгое равенство отличается от нестрогого тем, что",
                        responses: [
                            { text: 'приводит типы' },
                            { text: 'всегда возвращает true' },
                            { text: 'не приводит типы', correct: true },
                        ]
                    }, {
                        text: "Чему в итоге буде равен result? result = 25 && true && null && 'hi'",
                        responses: [
                            { text: 'true' },
                            { text: 'null', correct: true },
                            { text: '25' },
                        ]
                    }
                ]
            },
            questionIndex: 0,
        }
    },
    computed: {
        userResponses: function () {
            return Array(this.quiz.questions.length).fill(false)
        }
    },
    mounted() {
        this.loadData();
    },

    methods: {
        next() {
            this.questionIndex++;
        },
        score() {
            return this.userResponses.filter(function (val) { return val }).length;
        },

        async loadData() {
            await this.loadUser();
        },

        async loadUser() {
            let response = await axios.get('/user');
            this.user = response.data;
            this.firstName = this.user.firstName;
            this.lastName = this.user.lastName;
            console.log(this.user)
        },

        saveImage() {
            html2canvas(this.$refs.saveImage, {
                backgroundColor: null,
                useCORS: true,
                scale: 1,
            }).then((canvas) => {

                let url = canvas.toDataURL("image/png");
                this.imgUrl = url;
                let a = document.createElement("a");
                let event = new MouseEvent("click");
                a.download = name || this.firstName + " " + this.lastName + " - cертификат";
                a.href = this.imgUrl;
                a.dispatchEvent(event);
            });
        },
    }

}
</script>
<template>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            :style="{ 'width': questionIndex * 17 + '%' }"></div>
    </div>
    <div class="container">
        <div class="test">
            <h1 v-show="questionIndex != quiz.questions.length" class="mt-5 text-center">{{ quiz.title }}</h1>
            <legend v-show="questionIndex != quiz.questions.length" class="mt-5">Выберите один вариант ответа</legend>
            <!-- Вопросы: показывать div для каждого вопроса -->
            <div class="row mb-1" v-for="(question, index) in quiz.questions">
                <div v-show="index === questionIndex">
                    <h2 class="col-form-label col-sm-12 pt-0 mb-4 mt-5">{{ question.text }}</h2>
                    <!-- Ответы: Показывать li с радио-кнопкой для каждого возможного ответа -->
                    <div class="col-sm-12">
                        <div class="form-check mb-3" v-for="response in question.responses">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" v-bind:value="response.correct"
                                    v-bind:name="index" v-model="userResponses[index]"> {{ response.text }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Последняя страница, тест завершен, показываем счет -->
            <div v-show="questionIndex === quiz.questions.length">
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-5">
                            <div class="qrcodeColor" ref="saveImage">
                                <div class="card text-bg-light border-0">
                                    <img src="../assets/sertifikat.jpg" width="456" height="583" class="card-img"
                                        alt="...">
                                    <div
                                        class="card-img-overlay d-flex flex-wrap flex-column align-content-center justify-content-end pb-5">
                                        <h5 class="card-title text-center my-5">{{ firstName }} {{ lastName }}</h5>
                                        <p class="card-text text-center mb-5">Правильных ответов: {{ score() }} / {{
                                            quiz.questions.length
                                        }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end" v-if="questionIndex != quiz.questions.length">
                <button @click="next" type="button" class="btn btn-warning btn-lg fs-2">Далее</button>
            </div>
            <div class="myRecode d-flex justify-content-center my-3" @click="saveImage" v-preventReClick
                v-if="questionIndex == quiz.questions.length">
                <button type="button" class="btn btn-warning btn-lg fs-2">Скачать сертификат</button>
            </div>
        </div>

    </div>
</template>
<style></style>