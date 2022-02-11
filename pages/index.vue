<template>
	<div>
		<app-main />
		<app-projects />
		<app-skills />
		<app-about />
		<!-- <app-contact /> -->
  	</div>
</template>
<script>
import AppMain from '~/components/Main.vue';
import AppAbout from '~/components/About.vue';
import AppProjects from '~/components/Projects.vue';
import AppSkills from '~/components/Skills.vue';
// import AppContact from '~/components/Contact.vue';
import { mapGetters } from 'vuex';

export default {
	components: {
		AppMain,
		AppAbout,
		AppProjects,
		AppSkills,
		// AppContact,
	},
	computed: mapGetters( ['navItems'] ),
	mounted() {
		// eslint-disable-next-line no-undef
		AOS.init();

		// Check URL to see if a page exists.
		const hash = window.location.hash;
		const find = this.navItems.find( item => item.href === hash );
		!!find === true && this.$store.commit( 'setActivePage', find )
	}
};
</script>