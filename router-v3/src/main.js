import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from "vue-router";

import App from './App.vue';
import WelcomeScreen from "../../router-v2/src/pages/WelcomeScreen";
import UsersList from "../../router-v2/src/pages/UsersList";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: WelcomeScreen},
        {path: '/users', component: UsersList},
    ],
});

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
    app.mount('#app');
})



