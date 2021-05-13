<template>
  <!-- Skills -->
  <div
    id="skills"
    class="body-skills profile-section"
  >
    <div class="wrapper">
      <div
        class="body-title"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="750"
      >
        <div class="profile-section__title">Experience</div>
        <div class="profile-section__title--sm">Highlights of my top web competencies.</div>
      </div>
      <div class="skills-wrap">
        <div
          class="sub-section skills-wrap__section"
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div class="sub-section-title">
            <h4>Front-End Development</h4>
          </div>
          <div
            v-for="(s, index) in skills.front"
            :key="index"
            class="dev-icon"
          >
            <skill
              :title="s.title"
              :icon="s.icon"
              :stars="s.stars"
            />
          </div>
        </div>
        <div
          class="sub-section skills-wrap__section"
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <div class="sub-section-title">
            <h4>Back-End Development</h4>
          </div>
          <div
            v-for="(s, index) in skills.back"
            :key="index"
            class="dev-icon"
          >
            <skill
              :title="s.title"
              :icon="s.icon"
              :stars="s.stars"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Skill from './Skill.vue';

export default {
	components: {
		skill: Skill,
	},
	data() {
		return {
			skills: {
				front: [{
					title: 'Javascript',
					icon: 'devicon-javascript-plain',
					stars: 5,
				}, {
					title: 'Vue.js',
					icon: 'devicon-vuejs-plain colored',
					stars: 5,
				}, {
					title: 'React.js',
					icon: 'devicon-react-plain colored',
					stars: 5,
				}, {
					title: 'SASS',
					icon: 'devicon-sass-original colored',
					stars: 5,
				}, {
					title: 'Wordpress',
					icon: 'devicon-wordpress-plain colored',
					stars: 5,
				}, {
					title: 'Bootstrap',
					icon: 'devicon-bootstrap-plain colored',
					stars: 5,
				}, {
					title: 'HTML5',
					icon: 'devicon-html5-plain colored',
					stars: 5,
				}, {
					title: 'CSS3',
					icon: 'devicon-css3-plain colored',
					stars: 4,
				}],
				back: [{
					title: 'NodeJS',
					icon: 'devicon-nodejs-plain colored',
					stars: 5,
				}, {
					title: 'PHP',
					icon: 'devicon-php-plain colored',
					stars: 5,
				}, {
					title: 'AWS',
					icon: 'devicon-amazonwebservices-plain colored',
					stars: 5,
				}, {
					title: 'Bash',
					icon: 'devicon-bash-plain colored',
					stars: 5,
				}, {
					title: 'MongoDB',
					icon: 'devicon-mongodb-plain colored',
					stars: 5,
				}, {
					title: 'SQL',
					icon: 'devicon-mysql-plain colored',
					stars: 5,
				}, {
					title: 'Webpack',
					icon: 'devicon-webpack-plain colored',
					stars: 4,
				}, {
					title: 'Docker',
					icon: 'devicon-docker-plain colored',
					stars: 4,
				}],
			},
		};
	},
};
</script>

<style lang="scss">
.skills-wrap {
	display: grid;
	grid-template-columns: 1fr 1fr;
	&__section {
		text-align: center;
	}
	@media (max-width: 1200px ) {
		grid-template-columns: 1fr;
	}
}
.dev-icon {
	transition: all 0.2s;
	padding: 20px 15px;
	text-align: center;
	font-size: 42px;
	min-width: 145px;
	@include outwards-hover();
	.fa-star {
		color: transparent;
		transition: all 0.2s;
	}
	&:hover {
		color: white;

		i {
			color: white;
		}

		.fa-star {
			color: yellow;
		}
	}
}
</style>