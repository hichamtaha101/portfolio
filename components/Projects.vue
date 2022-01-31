<template>
  <div
    id="projects"
    class="text-center profile-section"
  >

	<!-- Current project modal -->
    <v-dialog v-model="modal" >
      <div>
        <v-carousel
          :show-arrows="true"
          hide-delimiters
          height="100%"
        >
          <v-carousel-item
            v-for="(slide, i) in projects[activeProject].slides"
            :key="i"
          >
            <div class="carousel__item">
              <div class="carousel__item__slider">
                <img :src="imglink(slide.image)">
              </div>
			  <div class="carousel__item__content flex justify-center items-center text-center">
              	<div v-html="slide.html" />
			  </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-dialog>

    <!-- Display current project modal here. -->
    <div class="wrapper">
      <div
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="750"
      >
        <div class="profile-section__title">Projects</div>
        <div class="profile-section__title--sm">Solutions i've developed over the years.</div>
	</div>

	<div class="projects-wrapper">
		<div class="projects-container">
		<div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 pb-8">
			<div
				v-for="(value, index) in projects"
				:key="index"
				:id="value.id"
				class="duration-200 h-64 p-4 cursor-pointer flex flex-col justify-center shadow-md"
				style="background-color: #fdfdfd"
				@click="modal = !modal; activeProject = index"
			>
				<div class="text-xl">{{ value.title }}</div>
				<div class="text-xs pb-4">{{ value.timeline }}</div>
				<div class="text-sm">{{ value.description }}</div>
			</div>
		</div>
		</div>
	</div>

      </div>
    </div>
</template>
<script>
import projects from '~/assets/js/projects';

export default {
	data() {
		return {
			modal: false,
			view: false,
			activeProject: 0,
			projects,
		};
	},
	methods: {
		imglink( image ) {
			return require(`../assets/images/projects/${image}`);
		}
	}
};
</script>

<style lang="postcss">

.projects-wrapper {
	height: 100%;
    width: 100%;
	position: relative;
	&::after {
		content: "";
		height: 75px;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background: transparent linear-gradient(
	180deg
	, rgba(255,255,255,0) 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
		z-index: 1;
		pointer-events: none;
	}
}
.projects-container {
	max-height: 555px;
    overflow-y: auto;
    width: 100%;
	padding-right: 15px;
	&::-webkit-scrollbar { width: 10px;}

	&::-webkit-scrollbar-track { background: transparent }

	&::-webkit-scrollbar-thumb {
		background-color: var(--secondary-color-2);
		border-radius: 50px;
	}
}

.carousel {
	&__item {
		&__slider {
			overflow-y: auto;
			max-height: 550px;
			background-color: white;
			img {
				display: block;
				border-radius: 3px;
				border: 4px solid #fff;
				width: 100%;
			}
		}
		&__content {
			min-height: 125px;
			border-top: 1px solid #e9e9e9;
			background: white;
			padding: 15px;
			color: black;
			a {
				color: #1976d2 !important;
			}
		}
	}
}

@define-mixin project-thumbnail $url {
	background: linear-gradient(
			rgba(255, 255, 255, 0.9),
			rgba(255, 255, 255, 0.9)
		),
		url($(url));
	background-size: cover;
	background-position: center bottom;
}

#migration_script:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/migration-script/thumbnail.png;
}

#chatso:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/chatso/chatso-login.png;
}

#showroom_api:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/convertus-vrs/thumbnail.png;
}

#client_portal:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/client-portal/thumbnail.png;
}

#achilles_portal:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/achilles-portal/thumbnail.jpg;
}

#bittreo:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/bittreo/thumbnail.jpg;
}

#websites:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/websites/henesys-group-homepage.png;
}

#erp:hover {
	@add-mixin project-thumbnail ~/assets/images/projects/henesys-erp/login.png;
}
</style>