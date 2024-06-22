import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import LessonPage from './views/LessonPage.vue';
import TestPage from './views/TestPage.vue';
import Appsidebar from './components/AppSidebar.vue';



export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/lesson/:lessonNumber',
            name: 'lesson',
            component: LessonPage
        },
        {
            path: '/test',
            name: 'test',
            component: TestPage
        },

    ]
})