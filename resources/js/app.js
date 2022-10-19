import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// FontAwesome Livrary
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBook, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faMagnifyingGlass, faBook)

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('inertia-head', Head)
            .component('inertia-link', Link)
            .component('font-awesome-icon', FontAwesomeIcon)
            .mixin({
                methods: {
                    asset: function (path) {
                        return './storage/' + path
                    }
                }
            })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
