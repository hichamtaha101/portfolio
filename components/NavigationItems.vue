<template>
	<div class="navigation-items">
        <div
          v-for="(item, index) in navItems"
          :key="index"
          :class="{ active: item.title === activePage.title }"
        >
          <a
            :href="item.href"
            @click="$store.commit( 'setActivePage', item )"
          >{{ item.title }}</a>
        </div>
      </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: mapGetters( ['navItems', 'activePage'] ),
};
</script>
<style lang="postcss">
.navigation-items {
	display: flex;
	& > div {
		margin: 0 5px;
		a {
			color: var(--main-color);
			text-transform: uppercase;
			font-size: 10px;
			@add-mixin underline-before-hover;
			&:hover,
			&:visited {
				background-color: white;
			}
		}
		&.active {
			font-weight: bold;
		}
	}
}
</style>