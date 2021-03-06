import { createApp } from 'vue';
import App from './App.vue';
import i18n from './libs/i18n/i18n';
import store from './store';

const app = createApp(App);

app.use(store);
app.use(i18n);

app.mount('#app');