// Set up and entry point to the vue section of the project

import { createApp } from 'vue';
import App from './App.vue';

// Credit to https://blog.logrocket.com/font-awesome-icons-vue-js-complete-guide/ for the icon guide
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app');