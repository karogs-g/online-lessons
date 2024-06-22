<script>
import AppJumbotron from '../components/AppJumbotron.vue';
import MainContent from '../components/MainContent.vue';
import AppAbout from '../components/AppAbout.vue';
export default {
    components: {
        AppJumbotron,
        MainContent,
        AppAbout
    }
};
</script>
<template>
    <app-jumbotron></app-jumbotron>
    <main-content></main-content>
    <app-about></app-about>
</template>
<style></style>