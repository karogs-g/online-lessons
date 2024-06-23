<script>
import axios from 'axios';
export default {
    data() {
        return {
            lessons: [],
        }
    },
    mounted() {
        this.loadLessons();
    },
    methods: {
        async loadLessons() {
            let response = await axios.get('/lessons');
            this.lessons = response.data;
            console.log(this.lessons)
            window.scrollTo(0, 0);
        },
        goLesson(lesson) {
            console.log(lesson.lessonNumber)
            this.$router.push({
                name: 'lesson',
                params: {
                    lesson: lesson.lessonNumber
                }
            });
        },
    }
}
</script>
<template>
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" 
    id="sidebar">
        <a href="/lesson/1" 
        class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-5 d-none d-sm-inline">Пробный курс по созданию сайтов</span>
        </a>
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" 
        id="menu">
            <li class="w-100 list-group-item friend" 
            v-for="item in lessons" 
            @click="goLesson(item)">
                <a :href="'/lesson/' + item.lessonNumber" 
                :class="{ active: $route.path == '/lesson/' + item.lessonNumber }"
                class="nav-link px-0"> <span class="d-none d-sm-inline">Урок</span> {{ item.lessonNumber }} </a>
            </li>
        </ul>
        <hr>
    </div>
</template>
<style>
#sidebar a {
    color: #c8c8c8;

}
#sidebar a:hover {
    color: #fefefe;
}
</style>