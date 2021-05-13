import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
        state: {
            activePage: 'home',
            transition: 'fade', // slide-in
        },
        getters: {
			activePage( state ) { return state.activePage; },
            transition( state ) { return state.transition; },
        },
        mutations: {},
        actions: {},
   })
}

export default createStore