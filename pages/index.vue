<template>
	<div>
		<app-main />
		<app-projects />
		<app-skills />
		<app-about />
		<app-contact />
  	</div>
</template>
<script>
import AppMain from '~/components/Main.vue';
import AppAbout from '~/components/About.vue';
import AppProjects from '~/components/Projects.vue';
import AppSkills from '~/components/Skills.vue';
import AppContact from '~/components/Contact.vue';

export default {
	components: {
		AppMain,
		AppAbout,
		AppProjects,
		AppSkills,
		AppContact,
	},
	mounted() {
		AOS.init();
	}
};
</script>