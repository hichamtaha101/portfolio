<template>
  <div
    id="about"
    class="body-about profile-section"
  >
    <div class="wrapper ">
      <div
        class="body-title"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="750"
      >
        <div class="profile-section__title">About</div>
        <div class="profile-section__title--sm">A little bit about myself.</div>
      </div>

      <div class="about__section">
        <div
          class="about__section__item about-professional"
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
          <div class="sub-section-title">
            <h3>Education & Work</h3>
          </div>
          <div class="sub-section-desc">
            <p>
              I am a graduate of Kwantlen Polytechnic University for the Bacehlor of Information and Technology program. The program I attended covered general computer hardware and software concepts, business statistics, and specializations in web development and networking. I specialized in web and mobile application development with a GPA of 3.5.
            </p>
            <p>
              Currently, I work full time at <a href="https://vancouverbitcoin.com/" target="_blank" style="color: #2794d3">Vancouver Bitcoin</a> as a full stack developer. Regarding the work environment, I am self-driven and engaging towards back-end oriented projects. My preferred development tools include Node, MongoDB, Vue, Nuxt and AWS.
            </p>
          </div>
        </div>
      </div>

      <div class="about__section">
        <div
          class="about__section__item"
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-duration="750"
        >
          <div class="sub-section-title">
            <h3>Personal Hobbies</h3>
          </div>
          <div class="sub-section-desc">
            <p>
              Outside of work hours, i'm still a developer. A fair amount of my spare time is invested in learning new development tools and techniques. I'm subscribed to various learning platforms such as Udemy, Code Academy and Team Tree House.
            </p>
            <p>
              However, I do have a life outside of web development. During my leisure time, watching television or hitting the gym is where i'll be. I enjoy fitness and am physically active at least three days of the week. Regarding television, I generally watch anything from American television series to silly cartoons and anime.
            </p>
          </div>
        </div>
        <div
          class="about__section__item about-personal"
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-duration="750"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about__section {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	&__item {
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
		box-shadow: 1px 1px 1px 1px #ececec;
	}

	.about-personal {
		background: url("~assets/images/about-2.jpg");
		background-position: center center;
		background-size: cover;
		box-shadow: 1px 1px 1px 1px #ececec;
	}
}
.sub-section-desc {
	padding: 0px 25px;

	p {
		margin: 0px 0 20px;
		color: #444444;
	}
}
@media screen and (max-width: 1404px) {
	.about-personal {
		order: -1;
	}
}
</style>