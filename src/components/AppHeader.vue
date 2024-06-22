<script>

</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img alt="KiberOne" class="logo" src="../assets/logo.jpg" width="101" height="52" />
                Онлайн уроки
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#about">О нас</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/lesson/1">Уроки</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <button class="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal"
                        data-bs-target="#signUp">Оставить заявку</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>

