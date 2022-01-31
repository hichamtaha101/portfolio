import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
        state: {
            activePage: { href: '#home', title: 'Home' },
            transition: 'fade', // slide-in
			navItems: [{
				href: '#home',
				title: 'Home',
			}, {
				href: '#projects',
				title: 'Projects',
			}, {
				href: '#skills',
				title: 'Experience',
			}, {
				href: '#about',
				title: 'About',
			}
			// ,{
			// 	href: '#contact',
			// 	title: 'Contact',
			// }
		]
        },
        getters: {
			navItems( state) { return state.navItems },
			activePage( state ) { return state.activePage; },
            transition( state ) { return state.transition; },
        },
        mutations: {
			setActivePage( state, value ) { state.activePage = value }
		},
        actions: {},
   })
}

export default createStore