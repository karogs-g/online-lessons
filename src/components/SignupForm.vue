<script>
import axios from 'axios';
export default {
    data() {
        return {
            isLoggedIn: false, isError: false,
            firstName: "", lastName: "",
            phone: "", email: "",
            city: "", signUp: null
        }
    },
    mounted() {
        this.signUp = bootstrap.Modal.
            getOrCreateInstance(document.
                getElementById('signUp'));
    },
    methods: {
        async signupUser(evt) {

            evt.preventDefault();
            await axios.post(`/user/signup`, {
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone,
                email: this.email,
                city: this.city
            });
            this.signUp.hide();
            this.firstName = "";
            this.lastName = "";
            this.phone = "";
            this.email = "";
            this.city = "";
            this.isLoggedIn = true;
            this.$router.push("/lesson/1");
        },
    },
}
</script>
<template>
    <div class="modal" id="signUp" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Записаться на пробный курс</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body container">
                    <form class="row g-3 justify-content-center" method="post" @submit="signupUser">
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="firstName" v-model="firstName" placeholder="Имя"
                                required>
                        </div>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="secondname" v-model="lastName"
                                placeholder="Фамилия" required>
                        </div>
                        <div class="col-md-10">
                            <input type="tel" class="form-control" id="telephone" v-model="phone" placeholder="Телефон"
                                required>
                        </div>
                        <div class="col-md-10">
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="email" class="form-control" id="email"
                                    aria-describedby="inputGroupPrepend2" v-model="email" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="city" v-model="city" placeholder="Город"
                                required>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="submit" class="btn btn-lg btn-outline-primary">Записаться</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>