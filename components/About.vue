<template>
  <div
    id="about"
    class="body-about profile-section text-center"
  >
    <div class="wrapper">
      <div
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="750"
      >
        <div class="profile-section__title">About</div>
        <div class="profile-section__title--sm">A little bit about myself.</div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div
          class="about__section__item about-professional shadow-md"
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-duration="750"
        />
        <div
          class="about__section__item"
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-duration="750"
        >
          <div class="pb-4">
            <h3>Education & Work</h3>
          </div>
          <div>
            <p>
            	I am a post-graduate from Kwantlen Polytechnic University with a Bachelor's in Information and Technology. The program I attended covered general computer hardware and software concepts, business statistics, and technology in web development and networking. I specialized in web and mobile application development with a GPA of 3.5.
            </p>
            <p>
              	Currently, I work at <a href="https://henesysgroup.com/" target="_blank">Henesys Group</a> as a freelance developer. Regarding the work environment, I am self-driven and engaging towards back-end oriented projects. My preferred development stack include MongoDB, Express, Node, Vue / Nuxt, and Amazon Web Services for infrastructure/deployment support.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div
          class="about__section__item"
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-duration="750"
        >
          <div class="pb-4">
            <h3>Personal Hobbies</h3>
          </div>
          <div>
            <p>
              Outside of work hours, i'm still a developer. A fair amount of my spare time is invested in learning new development tools and techniques. I'm subscribed to various learning platforms such as Udemy, Code Academy and Team Tree House.
            </p>
            <p>
              However, I do have a life outside of web development. During my leisure time, watching television or hitting the gym is where i'll be. I enjoy fitness and am physically active at least three days of the week. Regarding television, I generally watch anything from American television series to silly cartoons and anime.
            </p>
          </div>
        </div>
        <div
          class="about__section__item about-personal shadow-md"
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-duration="750"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.about__section__item {
	min-height: 400px;
	width: 665px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
}

.about-professional {
	background: url("~assets/images/about-1.jpg");
	background-position: center center;
	background-size: cover;
}

.about-personal {
	background: url("~assets/images/about-2.jpg");
	background-position: center center;
	background-size: cover;
}

@media screen and (max-width: 1404px) {
	.about-personal {
		order: -1;
	}
}
</style>