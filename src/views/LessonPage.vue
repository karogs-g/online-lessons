<script>
import axios from 'axios';
export default {
    data() {
        return {
            /*    // Данные загружены?
               isReady: false, */
            // Данные с сервера
            lesson: null,
            // Новый пост
            content: ``,
            lessonNumber: 1,
            /* isPassed: false */
        }
    },
    mounted() {
        this.loadData();
    },

    watch: {
        $route() {
            this.loadData();
        }
    },

    methods: {
        async loadData() {
            await this.loadLesson();
        },

        async loadLesson() {
            let response = await axios.get('/lesson', {
                params: {
                    lessonNumber: this.$route.params.lessonNumber
                }
            });
            this.lesson = response.data;
            if (this.lessonNumber != this.lesson.lessonNumber && this.lesson.lessonNumber == undefined) {
                this.$router.push(`/test`);
            }
            this.content = this.lesson.content;
            this.lessonNumber = this.lesson.lessonNumber;
            window.scrollTo(0, 0);
        },
        nextLesson() {
            this.lessonNumber++;

            if (this.lesson.lessonNumber) {
                this.$router.push(`/lesson/${this.lessonNumber}`);
                loadLesson();
            }
        }
    }
}
</script>
<template>
    <div class="progress sticky-top" role="progressbar" aria-label="Animated striped example" aria-valuenow="75"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            :style="{ 'width': $route.params.lessonNumber * 19 + '%' }"></div>
    </div>
    <div class="container">
        <div class="lesson " v-html="content">
        </div>
        <div class="d-flex justify-content-end">
            <button @click="nextLesson" type="button" class="btn btn-warning btn-lg fs-2">Далее</button>
        </div>
    </div>
</template>
<style></style>