<template>
  <div class="app">
    <v-app>
      <transition
        :name="transition"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	computed: mapGetters( ['transition'] ),
	mounted() {
		// eslint-disable-next-line no-undef
		AOS.init();
	},
};
</script>
