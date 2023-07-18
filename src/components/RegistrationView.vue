<template>
    <div id="registration-view" class="h-screen w-screen bg-slate-400 text-slate-900 flex justify-center items-center px-10 md:px-44 xl:px-96">
        <div id="form-regis" class="bg-slate-200 rounded-lg shadow-2xl w-screen px-5 md:px-10 xl:px-16 py-8 md:py-10">
            <div class="flex flex-col items-center">
                <img class="w-20" src="../assets/img/Logo 2.png" alt="">
                <h1 class="text-center text-black pb-5 md:mb-10">
                    Registration Page
                </h1>
            </div>
            <form @submit.prevent="register(user)" id="form" class="flex flex-col">
                <label class="mb-1" for="first-name">First Name</label>
                <input class="mb-5 px-2 py-2" v-model="user.firstName" id="first-name" type="text" placeholder="Enter your first name" required>
                <label class="mb-1" for="last-name">Last Name</label>
                <input class="mb-5 px-2 py-2" v-model="user.lastName" id="last-name" type="text" placeholder="Enter your last name" required>
                <label class="mb-1" for="email">Email</label>
                <input class="mb-5 px-2 py-2" v-model="user.email" type="email" name="email" id="email" placeholder="Enter your email" required>
                <label class="mb-1" for="email">Password</label>
                <input class="px-2 py-2" v-model="user.password" type="password" name="password" id="password" placeholder="Enter your password" required>
                
                <div class="flex justify-start items-center mt-5">
                    <button class="bg-slate-900 text-white px-5 py-2 rounded hover:shadow-xl text-center">
                        Sign up
                    </button>
                    <router-link class="ml-3 justify-end hover:underline" to="/login">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name: "registration-view",
        data(){
            return{
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                },   
            }
        },
        methods: {
            ...mapActions(['register']),
        }
    }
</script>