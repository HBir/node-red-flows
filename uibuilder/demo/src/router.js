const HeaderMenu = httpVueLoader('./components/HeaderMenu.vue');
const IndexView = httpVueLoader('./views/IndexView.vue');
const AdminView = httpVueLoader('./views/AdminView.vue');

export default {
    routes: [
        {
            path: '/',
            name: 'index',
            components: {
                default: IndexView,
                menu: HeaderMenu,
            },
        },
        {
            path: '/rooms',
            name: 'rooms_overview',
            components: {
                default: httpVueLoader('./components/RoomsOverview.vue'),
                menu: HeaderMenu,
            },
            children: [
                {
                    path: 'rooms/:roomId',
                    name: 'room',
                    component: () => Promise.resolve(httpVueLoader('./components/Room.vue')),
                },
            ],
        },
        {
            path: '/admin',
            name: 'admin',
            components: {
                default: AdminView,
                menu: HeaderMenu,
            },
            children: [
                {
                    path: 'info',
                    name: 'usage_info',
                    component: httpVueLoader('./components/UsageInformation.vue'),
                }
            ]
        },
    ],
};