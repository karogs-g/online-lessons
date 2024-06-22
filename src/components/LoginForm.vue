<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            username: "",
            password: "",
            isError: false
        };
    },
    methods: {
        login() {
            if (this.username == "admin" && this.password == "1234") {
                this.isError = false
                this.isLoggedIn = true;
            } else {
                this.isError = true;
            }
        }
    }
}
</script>

<template>
    <div class="login-form my-3 d-none">
        <div class="card">
            <div class="card-body">
                <div v-if="!isLoggedIn">
                    <div class="mb-3">
                        <label for="username" class="form-label">Логин</label>
                        <input type="text" class="form-control" id="username" autocomplete="off" v-model="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Пароль</label>
                        <input type="password" class="form-control" id="password" autocomplete="off" v-model="password">
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" @click="login">
                            Войти
                        </button>
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="isError">
                        Неправильные данные, попробуйте ещё раз.
                    </div>
                </div>

                <div class="alert alert-success" role="alert" v-if="isLoggedIn">
                    Добро пожаловать, пользователь!
                </div>
            </div>
        </div>
    </div>
    
</template>