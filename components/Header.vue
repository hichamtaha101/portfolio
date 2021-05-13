<template>
  <div class="nav__top fixed-top">
    <div class="wrapper">
      <div class="logo">
        <a href="#home">Hicham Taha</a>
      </div>
      <div class="nav__top__items">
        <div
          v-for="(n, index) in nav"
          :key="index"
          :class="{ active: n.title === activeNav.title }"
        >
          <a
            :href="n.href"
            @click="activeNav = n"
          >{{ n.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			activeNav: {},
			nav: [{
				href: '#home',
				title: 'Home',
			}, {
				href: '#portfolio',
				title: 'Portfolio',
			}, {
				href: '#about',
				title: 'About',
			}, {
				href: '#skills',
				title: 'Experience',
			}, {
				href: '#contact',
				title: 'Contact',
			}],
		};
	},
	mounted() {
		this.activeNav = this.nav[0];
	},
};
</script>

<style lang="scss">
.navbar-toggle {
	border: 1px solid $main_color;

	.icon-bar {
		background: $main_color;
	}
}

.nav {
	&__top {
		background-color: white;
		border-width: 0px;
		box-shadow: 1px 1px 0px 0px #ececec;
		padding: 30px 15px;

		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1030;

		.wrapper {
			display: flex;
			justify-content: space-between;
		}

		.logo {
			text-transform: uppercase;
			font-size: 16px;
			font-family: $font_header;
			letter-spacing: 1px;
		}

		&__items {
			display: flex;
			& > div {
				margin: 0 5px;
				a {
					text-transform: uppercase;
					font-size: 10px;
					@include underline-before-hover();

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
	}
}
</style>
