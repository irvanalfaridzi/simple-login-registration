import {router} from '../main'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiUrl = 'https://vue-blog-tutorial-9ba6b-default-rtdb.firebaseio.com/';

export const store = new Vuex.Store({
    strict: true,
    state : {
        user: JSON.parse(localStorage.getItem('user')),
        users: JSON.parse(localStorage.getItem('users')),
    },
    mutations: {
        resgisterSuccess(state, user){
           state.user = user;
        },
        loginSuccess(state, user){
            state.user = user;
        },
        getAllUserSuccess(state, users){
            state.users = users;
        }
    },
    actions: {
        register(context, user) {
            // check user
            this._vm.$http.get(apiUrl + 'users.json').then(function(users) {
                return users.json();
             }).then(function(users){
                for (let key in users) {
                    let x = users[key];
                    if (x.email == user.email ) {
                        context.commit('registerExist');
                        setTimeout(() => {
                            // display success message after route change completes
                            alert('Email already registered');
                        });
                        return true;
                    }
                }
                return false;
             }).then(function(exist){
                if (!exist) {
                    // regis the user
                    this.$http.post(apiUrl + 'users.json', user).then(function(user) {
                        console.log(user);
                        context.commit('resgisterSuccess', user);
                        router.push('/login');
                        setTimeout(() => {
                            // display success message after route change completes
                            alert('Registration successful');
                        })
                    });
                }
             }); 
        },
        login(context, auth) {
            this._vm.$http.get(apiUrl + 'users.json').then(function(users) {
               return users.json();
            }).then(function(users) {
                for (let key in users) {
                    let x = users[key];
                    if (x.email == auth.email && x.password == auth.password) {
                        localStorage.setItem('user', JSON.stringify(x));
                        context.commit('loginSuccess', x);
                        router.push('/home');
                        setTimeout(() => {
                            // display success message after route change completes
                            alert('Login successful, Hi ' + x.firstName + '!');
                        });
                        return;
                    }
                }

                setTimeout(() => {
                    // display success message after route change completes
                    alert('Username or password is incorrect');
                });
            });  
        },
        logout(){
            localStorage.removeItem('user');
            localStorage.removeItem('users');
            router.push('/login')
        },
        getAllUser(context){
            this._vm.$http.get(apiUrl + 'users.json').then(function(users) {
               return users.json();
             }).then(function(users){
                var usersData = [];
                for (let key in users) {
                    users[key].id = key;
                    usersData.push(users[key]);
                }
                localStorage.setItem('users', JSON.stringify(usersData));
                console.log(usersData);
                context.commit('getAllUserSuccess', usersData);
                return usersData;
             });  
        }
    }
})