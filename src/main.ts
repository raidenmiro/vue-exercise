import { createPinia } from 'pinia';
import { createApp } from 'vue';
import Application from './application/application.vue';

const application = createApp(Application);

application.use(createPinia());
application.mount('#app');
