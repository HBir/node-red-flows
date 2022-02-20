import rooms from './store-modules/rooms.js';
import devices from './store-modules/devices.js';

export default {
    state: {
        unconfiguredRooms: [],
        unconfiguredDevices: [],
    },
    getters: {
        hasUnconfiguredItems: state => state.unconfiguredRooms.length !== 0 || state.unconfiguredDevices.length !== 0,
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        rooms,
        devices,
    },
};