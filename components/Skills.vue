<template>
  <!-- Skills -->
  <div
    id="skills"
    class="body-skills profile-section text-center"
  >
    <div class="wrapper">
      <div
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="750"
      >
        <div class="profile-section__title">Experience</div>
        <div class="profile-section__title--sm">My top web competencies ranked.</div>
      </div>
      <div class="grid sm:grid-cols-2 xs:grid-cols-1 gap-4">
        <div
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-duration="900"
        >
		<h4 class="pb-4">Front-End Development</h4>
          <div
            v-for="(s, index) in skills.front"
            :key="index"
            class="dev-icon p-4 text-center"
          >
            <skill
              :title="s.title"
              :icon="s.icon"
              :stars="s.stars"
            />
          </div>
        </div>
        <div
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-duration="900"
        >
		<h4 class="pb-4">Back-End Development</h4>
          <div
            v-for="(s, index) in skills.back"
            :key="index"
            class="dev-icon p-4 text-center"
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
import skills from '~/assets/js/skills';

export default {
	components: { Skill },
	data() {
		return { skills };
	},
};
</script>

<style lang="postcss">
.dev-icon {
	transition: all 0.2s;
	font-size: 42px;
	min-width: 145px;
	@add-mixin outwards-hover;
	.fa-star {
		color: transparent;
		transition: all 0.2s;
	}
	&:hover {
		color: white;
		i { color: white; }
		.fa-star { color: yellow; }
	}
}
</style>