import LoginViewVue from "./components/LoginView.vue"
import RegistrationViewVue from "./components/RegistrationView.vue"
import HomeView from './components/HomeView.vue'

export default [
    {path: '/', component: HomeView},
    {path: '/login', component: LoginViewVue},
    {path: '/registration', component: RegistrationViewVue},

    // otherwise redirect to home
    { path: '*', redirect: '/' }
]