import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from "vue";
import App from "./App.vue";

import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';


import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";

const app = createApp(App);

app.use(PrimeVue);

app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Card', Card);

app.mount("#app");