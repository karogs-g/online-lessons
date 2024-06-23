<script></script>
<template>
    <footer class="footer" id="my_footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <h4>Информация</h4>
                    <ul class="list-unstyled">
                        <li class="m-3"><a href="/">Главная</a></li>
                        <li class="m-3"><a href="/#about">О нас</a></li>
                        <li class="m-3"><a href="/" data-bs-toggle="modal" data-bs-target="#signUp">Вход/Регистрация</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-12">
                    <h4>Контакты</h4>
                    <div class="footer-icons">
                        <ul class="list-unstyled">
                            <li class="m-3">Тел: <a href="tel:+79785620418">+ 7 978 562 04 18</a></li>
                        </ul>
                        <a href="https://t.me/karogs_g/" target="_blank"><i
                                class="bi bi-telegram socicon tg m-3 fs-1"></i></a>
                        <a href="mailto:opletsevsemen7.gmail.com" target="_blank"><i
                                class="bi bi-envelope socicon gm m-3 fs-1"></i></a>
                        <a href="https://wa.me/79785620417" target="_blank"><i
                                class="bi bi-whatsapp socicon wa m-3 fs-1"></i></a>
                        <a href="https://github.com/karogs-g/online-lessons" target="_blank"><i
                                class="bi bi-github socicon gh m-3 fs-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-3" style="color: #c8c8c8">
            © 2024 Сайт разработан мной и все права у меня.
        </div>
    </footer>
</template>
<style>
.footer {
    background-color: #211e22;
    color: #000;
    padding: 40px;
    text-align: center;
}

.footer h4 {
    color: #ccc;
    text-transform: uppercase;
    font-size: 16px;
    border-bottom: 1px solid #666;
    padding-bottom: 3px;
}

.footer a {
    text-decoration: none;
    transition: all .3s;
}

.footer a,
.footer li {
    color: #c8c8c8;
}

.footer a:hover {
    color: #fefefe;
}

.socicon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: background-color 0.5s;
}

.tg:hover {
    color: #08c;
}

.gm:hover {
    color: #c30000;
}

.wa:hover {
    color: #25d366;
}

.gt:hover {
    color: #4078c0;
}
</style>