<template>
  <div
    id="home"
    class="body-slider profile-section"
  >
    <div class="wrapper ">
      <div
        class="body-introduction"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div class="text-2xl font-bold">
          Hello,
        </div>
        <p>I am a full-stack developer with experience in content management, inventory management, digital marketing, and cryptocurrency services. I am well versed in many modern web based frameworks, and am currently pursuing Vue, Nuxt, MongoDB, Node and AWS development. I am currently employed as a freelance developer for <a href="https://henesysgroup.com/" target="_blank">Henesys Group</a>.</p>
        <p>Additionally, I graduated with a Bachelors in Information Technology at Kwantlen Polytechnic University, specializing in Web and Mobile Application Development.</p>
        <p>I've got a keen interest for upcoming innovations and am constantly researching new technologies to improve my development skill set.</p>
        <div class="body-social-icons">
          <a
            href="https://ca.linkedin.com/in/hichamakirataha"
            target="_blank"
          ><i
            class="fa fa-linkedin"
          /></a>
		  <a
            href="https://plus.google.com/u/0/115767603506886933291"
            target="_blank"
          ><i
            class="fa fa-google-plus"
          /></a>
          <a href="mailto:hichamtaha101@gmail.com"><i class="fa fa-envelope" /></a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="postcss">
.body-slider {
	height: calc(75vh);
	background: url("~assets/images/background.jpg");
	background-size: cover;
	background-position: center bottom;
	position: relative;
	padding: 15px;
}

.body-introduction {
	@add-mixin vertical-align absolute;
	text-align: left;
	top: 25%;

	p {
		margin-top: 10px;
		max-width: 600px;
	}

	.body-social-icons {
		padding-top: 10px;

		a {
			color: var(--main-color);
			font-size: 20px;
			padding: 10px 11px;
			margin-right: 5px;
			position: relative;
			transition: all 0.2s;
			display: inline-block;

			&:hover {
				color: white;
				box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.5);
			}

			@add-mixin left-to-right-hover;
		}

		a:first-child {
			padding: 10px 15px;
		}
	}
}
@media screen and (max-width: 992px) {
	.body-slider {
		background: url("~assets/images/background-992.jpg");
		background-size: cover;
		background-repeat: none;
	}
}
@media screen and (max-width: 480px) {
	.body-introduction {
		top: 0%;
		position: relative;
		transform: translateY(0px);
		padding: 30px 15px;
	}

	.body-introduction {
		.body-social-icons {
			a {
				color: white;
				box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.5);
				margin-top: 5px;

				&:before {
					transform: scaleX(1);
				}
			}
		}
	}
}
</style>